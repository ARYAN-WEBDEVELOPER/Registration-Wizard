# 🧠 Prompt Documentation – Registration Wizard

## 📌 Project Goal

Build a modern multi-step registration wizard using React that simulates real-world onboarding flows used in SaaS platforms and enterprise applications.

---

# 🚀 Project Requirements

## Level 1 – Core Multi-Step Form

Build a 3-step registration form:

### Step 1: Personal Information
- First Name
- Last Name
- Date of Birth

### Step 2: Account Details
- Email
- Password
- Confirm Password

### Step 3: Review & Submit
- Display all entered data
- Submit final form

### Functional Requirements
- Use React state management
- Preserve form data between steps
- Add Next and Back navigation
- Console log final submitted data
- Show success alert after submission

---

# ⚡ Level 2 – Validation & UX Enhancements

Add advanced form validation and better user experience.

## Validation Rules
- Email must contain valid format
- Password minimum 8 characters
- Confirm password must match password

## UX Features
- Real-time validation
- Disabled Next button until valid
- Show/Hide password toggle
- Dynamic progress bar

## Technical Concepts
- Regex validation
- Conditional rendering
- Controlled components
- Derived validation state

---

# 🏆 Level 3 – Enterprise Standard Form Handling

Refactor project using professional libraries.

## Required Libraries
- react-hook-form
- zod
- @hookform/resolvers

## Advanced Features
- Schema-based validation
- Optimized form performance
- Cleaner architecture
- Reusable validation schemas

---

# 🎨 UI/UX Requirements

Design a modern responsive onboarding experience using Tailwind CSS.

## UI Features
- Glassmorphism card layout
- Gradient background
- Animated progress bar
- Responsive design
- Modern buttons and inputs
- Hover and focus effects

---

# 🛠️ Technology Stack

## Frontend
- React.js
- Vite

## Styling
- Tailwind CSS

## Validation
- Zod

## Form Handling
- React Hook Form

---

# 📂 Final Project Structure

```bash
src/
│
├── components/
│   ├── Step1.jsx
│   ├── Step2.jsx
│   └── Step3.jsx
│
├── schemas/
│   └── validationSchema.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Expected Outcome

The final project should demonstrate:

- Multi-step form architecture
- Enterprise-level validation
- Modern UI/UX practices
- Responsive frontend development
- Production-ready React patterns

---

# 📌 Final Deliverables

- Fully working registration wizard
- Clean folder structure
- Responsive UI
- Form validation system
