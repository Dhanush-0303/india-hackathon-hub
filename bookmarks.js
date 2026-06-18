import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("bookmarkList");

async function loadBookmarks() {
  const snap = await getDocs(collection(db, "bookmarks"));

  snap.forEach((doc) => {
    let data = doc.data();

    list.innerHTML += `
      <div class="card">
        <h3>${data.name}</h3>
        <p>${data.organizer}</p>
        <p>${data.prizePool}</p>
      </div>
    `;
  });
}

loadBookmarks();