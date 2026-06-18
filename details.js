import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let id = localStorage.getItem("hackathonId");

const detailsDiv = document.getElementById("details");

async function loadDetails() {
  if (!id) {
    detailsDiv.innerHTML = "<p>No hackathon selected.</p>";
    return;
  }

  const docRef = doc(db, "hackathons", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let data = docSnap.data();

    detailsDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p><b>Organizer:</b> ${data.organizer}</p>
      <p><b>Description:</b> ${data.description}</p>
      <p><b>Eligibility:</b> ${data.eligibility}</p>
      <p><b>Rules:</b> ${data.rules}</p>
      <p><b>Team Size:</b> ${data.teamSize || 'N/A'}</p>
      <p><b>Prize Pool:</b> ${data.prizePool}</p>
      <p><b>Mode:</b> ${data.mode}</p>
      <p><b>Location:</b> ${data.location || 'N/A'}</p>
      <p><b>Contact:</b> ${data.contactEmail || 'N/A'}</p>
    `;
  } else {
    detailsDiv.innerHTML = "<p>No Data Found</p>";
  }
}

window.register = function () {
  alert("Redirecting to registration...");
  window.open("https://example.com");
}

window.share = function () {
  navigator.share({
    title: "Hackathon",
    text: "Check this hackathon!",
    url: window.location.href
  }).catch(err => console.log("Sharing failed or blocked:", err));
}

window.saveBookmark = async function () {
  let id = localStorage.getItem("hackathonId");
  if (!id) return;

  let docRef = doc(db, "hackathons", id);
  let snap = await getDoc(docRef);

  if (snap.exists()) {
    await setDoc(doc(db, "bookmarks", id), snap.data());
    alert("Saved to bookmarks ❤️");
  }
};

loadDetails();