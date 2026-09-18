import { mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import assert from 'node:assert/strict'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright')
const base = process.env.POSTER_URL || 'http://127.0.0.1:5198'
const output = new URL('../output/posters/refined/', import.meta.url)
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 })
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  for (const id of ['launch', 'tracking', 'nori', 'access', 'arrivals', 'terminals', 'portrait', 'how-it-works']) {
    const width = id === 'portrait' ? 1080 : 1920
    const height = id === 'portrait' ? 1350 : 1080
    await page.setViewportSize({ width, height })
    await page.goto(`${base}/posters.html?clean#${id}`)
    await page.evaluate(() => document.fonts.ready)
    await page.locator(`.poster.${id}`).waitFor()
    await page.evaluate(() => Promise.all([...document.images].map(img => img.decode())))
    const box = await page.locator('.poster').boundingBox()
    assert.equal(box.width, width)
    assert.equal(box.height, height)
    assert.equal(await page.locator('.studio').count(), 0)
    const copy = await page.locator('.poster').innerText()
    assert(!/Built for|October 2|Actual.*(?:app|screen)|Information shown at capture/i.test(copy))
    assert(!/NATSCO|Naujan Transport Service Cooperative/i.test(await page.locator('.poster footer').innerText()), `${id}: no footer client attribution`)
    assert(/October 5/i.test(copy), `${id}: launch date`)
    const geometry = await page.locator('.phone').evaluateAll(phones => phones.map(phone => {
      const img = phone.querySelector('img')
      const frame = phone.getBoundingClientRect()
      const style = getComputedStyle(phone)
      const imageStyle = getComputedStyle(img)
      return { ratioError: Math.abs(parseFloat(imageStyle.width) / parseFloat(imageStyle.height) - img.naturalWidth / img.naturalHeight), left: parseFloat(style.paddingLeft)+parseFloat(style.borderLeftWidth), right: parseFloat(style.paddingRight)+parseFloat(style.borderRightWidth), bottom: frame.bottom, extraCamera: getComputedStyle(phone, '::after').content }
    }))
    for (const device of geometry) {
      assert(device.ratioError < .002, `${id}: unstretched image`)
      assert(Math.abs(device.left-device.right) < 1, `${id}: symmetric bezel`)
      assert(device.left <= 4, `${id}: slim bezel`)
      assert(device.bottom < height - (id === 'portrait' ? 240 : 145), `${id}: device clears footer`)
      assert(['none','normal'].includes(device.extraCamera), `${id}: no camera overlay on screenshot`)
    }
    await page.locator('.poster').screenshot({ path: new URL(`${id}.png`, output).pathname.replace(/^\/(\w:)/, '$1') })
    console.log(`Exported ${id}: ${width} × ${height}`)
    await page.setViewportSize({ width: width * 2, height: height * 2 })
    await page.waitForFunction(({width}) => Math.abs(document.querySelector('.poster').getBoundingClientRect().width-width*2)<1, {width})
    await page.locator('.poster').screenshot({ path: new URL(`${id}-${id === 'portrait' ? 'hires' : '4k'}.png`, output).pathname.replace(/^\/(\w:)/, '$1') })
    await page.setViewportSize({ width: 1920, height: 1080 })
  }
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto(`${base}/posters.html#launch`)
  await page.getByRole('link', { name: '07 / Main poster' }).click()
  await page.locator('.portrait').waitFor()
  assert.equal(await page.locator('.studio a').nth(6).getAttribute('href'), '#portrait')
  assert.equal(await page.locator('.studio a').nth(7).getAttribute('href'), '#how-it-works')
  assert((await page.locator('.portrait').boundingBox()).height <= 708)
  await page.getByRole('link', { name: '03 / Meet Nori' }).click()
  await page.locator('.poster.nori').waitFor()
  await page.locator('input[type=file]').setInputFiles({ name: 'test-chat.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aOuoAAAAASUVORK5CYII=', 'base64') })
  await page.locator('.real-chat').waitFor()
  await page.reload()
  await page.locator('.real-chat').waitFor()
  await page.goto(`${base}/posters.html?clean#nori`)
  await page.locator('.real-chat').waitFor()
  assert.equal(await page.locator('.screenshot-tools').count(), 0)
  await page.evaluate(() => sessionStorage.removeItem('natsgo-poster-chat'))
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  assert.deepEqual(errors, [])
  console.log('All pages render; navigation, clean mode, screenshot loading/persistence, and viewport fit passed.')
} finally { await browser.close() }
