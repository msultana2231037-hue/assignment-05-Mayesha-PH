# 🧑‍💻 Dev Stack Builder

A responsive web application built with **React, TypeScript, and Tailwind CSS** that allows users to discover different technologies and create their own technology stack. Users can add technologies, manage their selected items, and get instant feedback through toast notifications.

## 🔗 Live Website

**Live Demo:** [https://assignment-05-mayesha-ph.vercel.app/]

---

## 📌 About The Project

**Dev Stack Builder** is a simple and interactive technology management application. The available technologies are retrieved from a JSON API and displayed as cards.

Users can:

* Explore different technologies
* Add technologies to their personal stack
* Remove a selected technology
* Clear the complete stack
* See how many technologies they have selected
* Get notification messages when performing actions

The interface is designed to remain usable and visually consistent on different screen sizes.

---

## ✨ Key Features

* 📱 Responsive layout for mobile, tablet, and desktop
* 🔎 Technology cards with useful information
* ➕ Add technologies to the personal stack
* 🚫 Prevent the same technology from being selected twice
* ❌ Remove technologies individually
* 🧹 Clear the complete stack with one action
* 🔔 Interactive toast messages for user actions
* 🔢 Selected technology count
* 🌐 Technology data loaded through an API
* 🎨 Responsive UI using Tailwind CSS

---

## 🧰 Built With

This project was developed using:

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **React-Toastify**
* **Fetch API**
* **HTML5**
* **Git & GitHub**

---

## 📦 Dependencies

Install the project dependencies with:

```bash
npm install
```

For toast notifications, the project uses:

```bash
npm install react-toastify
```

---

## 📁 Folder Organization

```text
src/
│
├── assets/
│   └── images and other assets
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technology.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStackCard.tsx
│   └── Footer.tsx
│
├── type.ts
├── App.tsx
├── index.css
└── main.tsx
```

---

## ⚙️ Run The Project Locally

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### Step 3: Install the required packages

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

After running the command, open the local URL provided by Vite in your browser.

---

## 🌐 Data Source

The technology information is loaded dynamically from a JSON resource:

```text
https://raw.githubusercontent.com/msultana2231037-hue/assignment-05-Mayesha-PH/refs/heads/main/tech.json
```

The application uses the **Fetch API** to retrieve this data and then displays the technologies dynamically.

---

## 🔄 Application Workflow

### Adding a Technology

When the user clicks the **Add** button, the selected technology is added to the personal stack.

A toast notification confirms the action.

### Avoiding Duplicate Items

A technology that has already been selected cannot be added again. Instead, the application informs the user with a warning notification.

### Removing an Item

Each selected technology can be removed separately from the personal stack using its remove button.

### Clearing The Stack

The **Remove All** action removes all currently selected technologies and resets the stack.

---

## 📱 Responsive Interface

The application follows a responsive design approach so that the layout adapts to:

* 📱 Mobile phones
* 📲 Tablets
* 💻 Desktop screens

Tailwind CSS responsive classes are used to adjust spacing, sizing, alignment, and layout according to the screen size.

---

## 🎯 Project Purpose

This project was created as a practical React assignment to demonstrate concepts such as:

* React component development
* TypeScript types
* State management
* API data fetching
* Conditional rendering
* Array operations
* Event handling
* Responsive design
* Toast notifications

---

## 👤 Developer

**Your Name**

* GitHub: [Your GitHub Profile]
* Email: [Your Email]

---

## 📄 License

This project was developed for educational purposes as part of a Programming Hero assignment.

## 📝 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us create the UI.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change when the user interacts with the application.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component. In this project, I used it to store and update the technologies selected by the user for their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON API when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which item was added, removed, or changed and update the UI correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it to show an empty stack message when the user has not selected any technology.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

If the child needs to send something back, the parent can pass a **function as a prop**. The child calls that function with the required data, and the parent receives it.

