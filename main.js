window.onload = function () {
  document.getElementById("passwordInput").focus();
};

var toggleButton = document.getElementById("toggleButton");
var body = document.body;

toggleButton.addEventListener("click", function () {
  body.classList.toggle("old-computer");

  var coverPic = document.getElementById("coverPic");
  var currentIcon = coverPic.getAttribute("src");

  var favicon = document.getElementById("favicon");
  var currentFavicon = favicon.getAttribute("href");

  if (currentIcon.includes("icon.png")) {
    coverPic.setAttribute("src", "./images/darkMode.png");
    favicon.setAttribute("href", "./images/darkMode.png");
  } else {
    coverPic.setAttribute("src", "./images/icon.png");
    favicon.setAttribute("href", "./images/icon.png");
  }

  var icon = toggleButton.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

document.addEventListener("DOMContentLoaded", function () {
  function showContent() {
    var coverLetter = document.getElementById("coverLetter");
    var mainDisplay = document.getElementById("mainDisplay");
    coverLetter.style.display = "none";
    mainDisplay.style.display = "block";
    mainDisplay.style.opacity = "1";
  }

  document.querySelector(".seeMore").addEventListener("click", showContent);
});

document
  .getElementById("passwordInput")
  .addEventListener("keyup", function (event) {
    var coverLetter = document.getElementById("coverLetter");
    if (event.target.value === "gemini") {
      coverLetter.style.display = "block"; // Reveal the cover letter
      document.getElementById("passwordContainer").style.display = "none"; // Hide the password input
    }
  });
