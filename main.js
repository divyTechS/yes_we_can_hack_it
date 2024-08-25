
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJn3uriuDrdQZmNr2zY_3-YCTK5h4ksYs",
    authDomain: "login-b00ce.firebaseapp.com",
    projectId: "login-b00ce",
    storageBucket: "login-b00ce.appspot.com",
    messagingSenderId: "493350341119",
    appId: "1:493350341119:web:08c4711b88436cb8c9ffca",
    measurementId: "G-6LET6VBBSM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
