import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("notificationList");

async function loadNotifications() {
  const snap = await getDocs(collection(db, "notifications"));

  snap.forEach((doc) => {
    let data = doc.data();

    list.innerHTML += `
      <div class="card">
        <h3>🔔 ${data.title}</h3>
        <p>${data.message}</p>
      </div>
    `;
  });
}

loadNotifications();