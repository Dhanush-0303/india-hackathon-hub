import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success");
      window.location.href = "home.html";
    })
    .catch(err => {
      console.error(err);
      alert("Login Error: " + err.message);
    });
};

window.signup = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created Successfully!");
    })
    .catch(err => {
      console.error(err);
      alert("Signup Error: " + err.message);
    });
};