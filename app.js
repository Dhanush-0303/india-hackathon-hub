import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let allHackathons = [];

const list = document.getElementById("hackathonList");

async function loadHackathons() {
  const querySnapshot = await getDocs(collection(db, "hackathons"));

  allHackathons = [];

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    allHackathons.push(data);
  });

  displayHackathons(allHackathons);
}

function displayHackathons(dataArray) {
  list.innerHTML = "";

  dataArray.forEach((data) => {
    list.innerHTML += `
      <div class="card">
        <h3>${data.name}</h3>
        <p>Organizer: ${data.organizer}</p>
        <p>Prize: ${data.prizePool}</p>
        <p>Mode: ${data.mode}</p>

        <button onclick="openDetails('${data.id}')">
          View Details
        </button>
      </div>
    `;
  });
}

window.openDetails = function(id){
  localStorage.setItem("hackathonId", id);
  window.location.href = "details.html";
}

// 🔍 SEARCH FUNCTION
window.searchHackathons = function () {
  let value = document.getElementById("searchBox").value.toLowerCase();

  let filtered = allHackathons.filter(item =>
    item.name.toLowerCase().includes(value)
  );

  displayHackathons(filtered);
};

// 🎯 FILTER FUNCTION
window.filterHackathons = function () {
  let value = document.getElementById("filter").value;

  if (value === "all") {
    displayHackathons(allHackathons);
  } else {
    let filtered = allHackathons.filter(item =>
      item.mode === value
    );

    displayHackathons(filtered);
  }
};

loadHackathons();