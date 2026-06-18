import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addHackathon = async function () {

  let name = document.getElementById("name").value;
  let organizer = document.getElementById("organizer").value;
  let prizePool = document.getElementById("prizePool").value;
  let mode = document.getElementById("mode").value;
  let location = document.getElementById("location").value;
  let description = document.getElementById("description").value;
  let eligibility = document.getElementById("eligibility").value;
  let rules = document.getElementById("rules").value;

  try {
    await addDoc(collection(db, "hackathons"), {
      name,
      organizer,
      prizePool,
      mode,
      location,
      description,
      eligibility,
      rules,
      startDate: "",
      endDate: "",
      registrationDeadline: "",
      registrationLink: "",
      teamSize: "",
      contactEmail: ""
      
    });
    await addDoc(collection(db, "notifications"), {
  title: "New Hackathon Added",
  message: name + " is now live!"
});

    alert("Hackathon Added Successfully ✅");
  }
  catch (error) {
    alert(error.message);
  }
};