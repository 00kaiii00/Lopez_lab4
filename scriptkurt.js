// DARK MODE
document.getElementById("themeBtn").onclick = function () {
  document.body.classList.toggle("dark-mode");
};

// EDIT JOB TITLE
document.getElementById("editJobBtn").onclick = function () {
  const newTitle = prompt("Enter new job title:");
  if (newTitle) {
    document.getElementById("jobTitle").textContent = newTitle;
  }
};

// SHOW / HIDE SKILLS
const skillsBtn = document.getElementById("toggleSkillsBtn");
const skills = document.getElementById("skillsSection");

skillsBtn.onclick = function () {
  if (skills.style.display === "none") {
    skills.style.display = "block";
    skillsBtn.textContent = "Hide Skills";
  } else {
    skills.style.display = "none";
    skillsBtn.textContent = "Show Skills";
  }
};

// CHARACTER COUNTER
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
  counter.textContent = 200 - msgBox.value.length;
};

// FORM VALIDATION
function validateForm() {
  const name = document.getElementById("nameField").value.trim();
  const email = document.getElementById("emailField").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in Name and Email");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// TODAY'S DATE
document.getElementById("dateDisplay").textContent =
  "Today's Date: " + new Date().toDateString();

// GREETING
const hour = new Date().getHours();
const greet = document.getElementById("greeting");

if (hour < 12) {
  greet.textContent = "Good Morning ☀️";
} else if (hour < 18) {
  greet.textContent = "Good Afternoon 🌤️";
} else {
  greet.textContent = "Good Evening 🌙";
}
