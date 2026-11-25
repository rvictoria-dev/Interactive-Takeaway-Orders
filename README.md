# Interactive Takeaway Orders

### ₊⊹ About

Interactive takeout order dashboard, designed to simulate the workflow of a kitchen.
Each order displays the customer, the amount in euros, and the items on a clean, minimalist card.
When you click the status button, the order progresses from “Preparing” to “Ready” and then to “Collected.”
The counters for active and completed orders update in real time.

https://github.com/user-attachments/assets/c91528a0-ce96-41b1-9b6a-d946d5c5dca6

---

### ★ Features

- **Live Order Dashboard:** Lists the day’s orders by number, customer, items, and amount in euros.

- **One-Click Status:** Each order progresses from “Preparing” to “Ready” and then to “Collected.”

- **Color-Coded Visual Feedback:** Each status has its own button style, making it easy to see progress at a glance.

- **“LIVE” counter:** shows how many orders are currently active.

- **Completed counter:** updates whenever an order is picked up.

- **Smooth microinteractions:** animated transitions when the status changes.

- **Minimalist design:** light background, rounded cards, and a warm palette of brown tones.

---

### .ᐟ.ᐟ How It Works

- **Structure (HTML):** Each order is an `.order` element containing a number, customer, items, and a `<button>` that stores the current status. The #live badge and the #completed counter are ready to be updated by JavaScript.

- **States (CSS):** The button starts with the default style (Preparing). The .ready and .done classes change the colors, and transition: 0.2s smooths the transition.

- **Interaction (JS):** The script selects all buttons using `querySelectorAll(“.order button”)` and sets an `onclick` event on each one.

- **Status Cycle:** With each click, the button cycles through the states: Preparing → ready → Collected. When you click Collected, it returns to Preparing.

- **Counters:** After each click, the `updateCounters()` function counts the buttons with the `.done` class. That number is added to `Completed`, and the LIVE badge displays the total number of orders minus the completed ones.

Summary of the flow: 
```
click → class and text change → update of the `Completed` and `LIVE` counters.
```

---

### ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

### 🖿 Project structure

```
interactive-takeaway-orders/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

### 📖 What i learned

- **DOM manipulation:** Select multiple elements using querySelectorAll and iterate through them all with forEach.

- **Click events:** Use onclick to respond to user actions and update the interface in real time.

- **State changes with classes:** Toggle between .ready and .done in JavaScript and let CSS handle the appearance of each state.

- **Conditional logic:** Use if / else if / else to create a state cycle that loops back to the beginning.

- **Dynamic counters:** Count elements using `querySelectorAll(“button.done”).length` and calculate the total number of active orders using `buttons.length - done`.

- **Reusable functions:** Group counter updates into `updateCounters()` instead of repeating the code.

- **Microinteractions:** Use `transition` to make status changes smoother.
HTML best practices: Fix details like the viewport so the layout works well on mobile devices.

- **Workflow with Git and GitHub:** Use `git pull`, `add`, `commit`, and `push` to keep the project consistent between the local folder and the repository.
