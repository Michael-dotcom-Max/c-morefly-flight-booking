# ✈️ C-MoreFly

**C-MoreFly is a flight booking website you can run on your computer.** It looks and feels like a real flight booking site — you search for flights, pick one you like, fill in your details, and "pay." Don't worry, no real money is involved and no real flights are booked. It's a demo app, great for learning or showing off.

---

## 🤔 What Does It Actually Do?

Imagine going to a website like Expedia or Google Flights. You type in where you want to go, pick a date, and a list of flights appears. You choose one, fill in your name and card details, and get a booking confirmation.

C-MoreFly does exactly that — just without real flights or real payments. Everything is simulated, which makes it safe to play around with.

Here's the step-by-step experience:

**Step 1 — Search**
You pick a city you're flying from, a city you're flying to, a date, how many passengers, and whether you want Economy, Business, or First Class. Then you hit "Search Flights."

**Step 2 — Pick a Flight**
A list of 8 flights appears, from airlines like Emirates, British Airways, Delta, and more. Each one shows the price, departure and arrival times, how long the flight takes, and whether it's direct or has a stopover. You can sort them by price or rating, and filter by class. When you find one you like, click "Select Flight."

**Step 3 — Fill In Your Details**
You enter passenger names, email addresses, and phone numbers. Then you fill in a (fake) credit card to complete the booking.

**Step 4 — Confirmation**
You get a booking confirmation screen with a reference number, all your trip details, and the total cost. That's it!

---

## 💻 How Do I Run It?

You'll need two free tools installed on your computer first:

- **Node.js** — this is what runs the app. Download it at [nodejs.org](https://nodejs.org) (get the "LTS" version)
- **A terminal** — on Mac this is called Terminal, on Windows use Command Prompt or PowerShell

Once you have those, follow these steps:

```
1. Download or clone this project to your computer
2. Open your terminal and navigate to the project folder
3. Type:  npm install   (then press Enter — this downloads everything the app needs)
4. Type:  npm start     (then press Enter — this starts the app)
5. Open your browser and go to:  http://localhost:3000
```

The app should open automatically. If it doesn't, just copy `http://localhost:3000` into your browser's address bar.

---

## 🌍 Which Cities Can I Choose From?

The app includes 40 real cities and airports from around the world, including:

New York, London, Paris, Dubai, Tokyo, Sydney, Singapore, Los Angeles, Toronto, Mumbai, Beijing, Amsterdam, Bangkok, Rome, Barcelona, and many more.

---

## 🛫 Which Airlines Appear?

Flights are shown from 15 major real-world airlines, including Emirates, British Airways, Singapore Airlines, Delta, Lufthansa, Air France, Qantas, and others. The specific flights shown (times, prices, etc.) are randomly made up each time you search.

---

## ❓ Common Questions

**Is this a real booking site?**
No. No real flights are booked and no real payments are taken. It's a demo.

**Can I use a real credit card?**
You could type the numbers in, but nothing will be charged — there's no real payment system connected. We'd recommend just typing in made-up numbers like `1234 1234 1234 1234`.

**Why are the prices different every time I search?**
The flights are randomly generated each time, so prices and times will change. This is by design.

**Does it work on my phone?**
It's primarily designed for desktop/laptop browsers, but may work on mobile too.

**Do I need to create an account?**
No. Just open it and start searching.

---

## ⚠️ Good to Know

- The flights, prices, and times shown are **not real** — they're generated randomly
- The **confirmation email** mentioned at the end is just for show — no email is actually sent
- If you close or refresh the page, everything resets and you'll start from scratch

---

*C-MoreFly is a demo project built with React — a popular tool for building websites.*
