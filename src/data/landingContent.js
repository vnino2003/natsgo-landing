export const appLinks = {
  web: '',
  android: '',
}

export const navItems = [
  { label: 'Why', href: '#commuters', id: 'commuters' },
  { label: 'Experience', href: '#screens', id: 'screens' },
  { label: 'Features', href: '#operations', id: 'operations' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export const commuterPoints = [
  {
    title: 'Check before leaving',
    body: 'Commuters can see if a Natsco bus is nearby before walking to the road or terminal.',
  },
  {
    title: 'One place for route info',
    body: 'Terminal hours, fare updates, promos, and announcements stay inside the same mobile app.',
  },
  {
    title: 'Route timing that improves',
    body: 'NatsGo uses machine learning on trip history to keep arrival predictions practical for the Calapan-Naujan route.',
  },
]

export const appScreens = [
  {
    title: 'Home',
    body: 'Weather, nearby buses, updates, and shortcuts in one place.',
    image: '/screenshots/commuter-home-display.png',
    alt: 'NatsGo home screen',
    featured: true,
  },
  {
    title: 'Arrivals',
    body: 'Prediction view for upcoming trips.',
    image: '/screenshots/commuter-arrivals-display.png',
    alt: 'NatsGo predicted arrivals screen',
  },
  {
    title: 'Track',
    body: 'Map view with live bus positions.',
    image: '/screenshots/commuter-track-display.png',
    alt: 'NatsGo live tracking map screen',
  },
  {
    title: 'Terminals',
    body: 'Terminal cards with hours and status.',
    image: '/screenshots/commuter-terminals-display.png',
    alt: 'NatsGo terminals screen',
  },
  {
    title: 'Account',
    body: 'Profile, preferences, and activity.',
    image: '/screenshots/commuter-account-display.png',
    alt: 'NatsGo account screen',
  },
]

export const commuterFeatures = [
  {
    title: 'Nearby buses',
    body: 'See if a Natsco bus is close to your current location before you wait outside.',
    meta: 'Live location',
    wide: true,
  },
  {
    title: 'Predicted arrivals',
    body: 'ML-predicted arrival times based on recorded trip patterns, so you know when to expect a bus.',
    meta: 'ML',
  },
  {
    title: 'Terminal details',
    body: 'View terminal status, location, operating hours, and available buses in one screen.',
    meta: 'Terminals',
  },
  {
    title: 'Fares and updates',
    body: 'Find fare information, promos, and announcements without asking around.',
    meta: 'Route info',
    wide: true,
  },
]

export const commuterFlow = [
  {
    number: '01',
    title: 'Open NatsGo',
    body: 'Start from the home screen to check weather, route shortcuts, and nearby buses.',
  },
  {
    number: '02',
    title: 'Choose what you need',
    body: 'Track a bus, check arrivals, open terminals, or read fare and announcement updates.',
  },
  {
    number: '03',
    title: 'Plan the ride',
    body: 'Use the latest visible status to decide when to leave or which terminal to check.',
  },
]

export const noriConversation = [
  { from: 'user', text: 'Are there any buses nearby?' },
  { from: 'nori', text: "I found an active bus on the Calapan–Naujan route. Here's the live map so you can track it.", action: 'Track on Map' },
  { from: 'user', text: 'When will it arrive?' },
  { from: 'nori', text: "Based on your location, here are the predicted arrival times for buses near you.", action: 'View Arrivals' },
  { from: 'user', text: 'How much is the fare?' },
  { from: 'nori', text: "Here are the current fares and available discounts for your route.", action: 'View Fares' },
  { from: 'user', text: 'Thanks!' },
  { from: 'nori', text: "You're welcome — I'm here whenever you need a hand." },
]

export const faqs = [
  {
    q: 'What route is this for?',
    a: 'The current focus is the Natsco route between Calapan and Naujan.',
  },
  {
    q: 'Will commuters see plate numbers?',
    a: 'No. The commuter side only shows public bus labels, ETA, distance, and status.',
  },
  {
    q: 'How are arrivals predicted?',
    a: 'NatsGo can use completed trips, GPS logs, route direction, timing patterns, and live movement.',
  },
  {
    q: 'What else can commuters check?',
    a: 'Commuters can check nearby buses, predicted arrivals, terminal details, fares, promos, and route announcements.',
  },
]
