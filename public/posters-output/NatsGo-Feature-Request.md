Hi po! We'd like to request a free feature for our capstone project.

---

## About the Project

NatsGo is a real-time bus tracking and commuter information system designed for NATSCO (Naujan Transport Service Cooperative) passengers traveling the Calapan-Naujan route in Oriental Mindoro. It is available as a web app accessible from any mobile browser and as a downloadable Android app.

---

## How It Works

The system tracks NATSCO buses using GPS devices installed on each unit. Location data is transmitted in real time to the NatsGo platform, allowing commuters to open the app and see exactly where buses are on the map at any given moment. Commuters no longer need to wait at the road with no idea when the next bus will arrive - they can check from home and plan when to leave.

---

## Features

### Live Bus Tracking

Commuters can view the real-time location of NATSCO buses on an interactive map. Each bus shows its route, direction, and how recently its location was updated. Commuters can tap any bus to see more details, including estimated distance and arrival time.

### Predicted Arrival Times (Machine Learning)

NatsGo uses a machine learning model (Random Forest) that was trained on recorded trip data from actual NATSCO bus trips. The model learns patterns from past trips - such as typical travel times between stops at different times of day - and uses those patterns to predict when a bus is likely to pass a commuter's area.

For example, a commuter waiting at a specific location along the route can see predicted passing times for each bus - from the first trip of the day to the last. The predictions are different per location because the model accounts for actual travel time from the terminal to that specific point along the route. A commuter in Barcenaga will see different predicted times than a commuter in Lumangbayan, because each location has its own set of predictions based on how long buses typically take to reach that area. The more trips that are recorded over time, the more accurate the predictions become.

This means commuters don't have to guess - they can check predicted arrival times for their exact location, see all remaining trips for the day, and decide when to head out.

### Nearby Bus Alerts (Android)

Android app users can enable automatic notifications. When a tracked NATSCO bus enters a certain distance from the commuter's location, the app sends a push notification alerting them that a bus is approaching. This way commuters don't need to keep the app open - they get notified and can head to the road at the right time.

### Nori - In-App Assistant

Nori is a built-in assistant inside the app that helps commuters find information quickly. Commuters can ask Nori about available routes, fare prices, terminal locations, predicted arrivals, and other travel-related questions. Nori uses both AI-powered responses and a local knowledge base to provide accurate guidance.

### Terminal Information

The app provides details about NATSCO terminals, including their locations, operating hours, and available bus units. Commuters can check terminal info before traveling so they know where to go and when the terminal is open.

### Fares

Updated fare information is available inside the app. Commuters can check regular fares for the Calapan-Naujan route without having to ask at the terminal.

### Promos, Announcements, and Travel Advisories

NATSCO can post promos, service announcements, schedule changes, and travel advisories directly through the app. Commuters stay informed about anything that might affect their trip.

---

## Technology Used

- Frontend: Vue.js (web and Android via Capacitor)
- Backend: Node.js with Express
- Database: MySQL
- Machine Learning: Python (Random Forest model for arrival predictions)
- Hardware: ESP32 microcontroller with GPS module for bus tracking units
- Push Notifications: Firebase Cloud Messaging

---

## Launch Date

October 5 - Available on Web and Android

---

## Developed by

[Full Name] - [Role]
[Full Name] - [Role]
[Full Name] - [Role]
[Full Name] - [Role]

4th Year - [Course Name]
Mindoro State University - Calapan Campus

---

Attached po ang poster for reference. Maraming salamat po!
