# Quiz Web Application

## 📌 Purpose
           
This project is an interactive quiz web application built with React. It allows users to test their knowledge by answering a series of questions, navigate between them, and receive feedback based on their performance.

The application demonstrates core front-end development concepts such as state management, component-based architecture, and user interaction handling.

---

## 💡 Value to Users

This application provides the following value:

* **Interactive Learning**: Users actively engage with questions rather than passively reading content.
* **Immediate Feedback**: Users can track their progress and see results after completing the quiz.
* **User Control**: Navigation buttons (Next, Previous) allow users to move through questions at their own pace.
* **Clear Interface**: A simple and consistent design ensures ease of use and accessibility.
* **Accessible Design**: High contrast colours and readable layouts support usability for a wide range of users.

---

## ⚙️ Features

* Start screen with instructions
* Multiple-choice questions
* Answer selection and tracking
* Navigation between questions (Next/Prev)
* Progress indicator
* Final results screen
* Responsive and clean UI design

---

## 🎨 Design Principles

This project follows key UI/UX guidelines:

* Uses a maximum of three colours (blue, white, and gray) for consistency
* Maintains strong contrast between text and background for accessibility
* Avoids distracting backgrounds to keep focus on content
* Ensures consistent button styles and layout throughout the app

---

## 🚀 Deployment Procedure

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### 3. Run the Application Locally

```bash
npm start
```

The app will open in your browser at:

```
http://localhost:3000
```

---

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

### 5. Deploy the Application

You can deploy using platforms such as:

* **Netlify**

  * Drag and drop the `build` folder into Netlify
* **Vercel**

  * Connect your GitHub repository and deploy automatically
* **GitHub Pages**

  ```bash
  npm install gh-pages
  ```

  Add this to `package.json`:

  ```json
  "homepage": "https://yourusername.github.io/your-repo-name"
  ```

  Then run:

  ```bash
  npm run build
  npm run deploy
  ```

---

## 🛠️ Technologies Used

* React (JavaScript library for building UI)
* Tailwind CSS (for styling)
* JavaScript (ES6+)
* HTML5 & CSS3

---

## 📈 Future Improvements

* Add timer functionality for each question
* Show correct/incorrect answers after submission
* Add categories or difficulty levels
* Store user scores locally or in a database

---

## 📄 License

This project is for educational purposes.

