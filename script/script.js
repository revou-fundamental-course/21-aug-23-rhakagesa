// Mengganti nama pada halaman home
function welcomePage() {
  const hiname = document.querySelector("#hiname");
  const inputName = prompt("Masukkan nama anda");
  hiname.innerHTML = inputName;
}

// Slide Image
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideimages");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Validasi Form
function validateForm() {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.forms["form"]["name"].value;
    const date = document.forms["form"]["date"].value;
    const gender = document.forms["form"]["gender"].value;
    const msg = document.forms["form"]["msgbox"].value;
    if (name === "" || date === "" || gender === "" || msg === "") {
      alert("Tidak boleh kosong!");
    } else {
      const currentTime = document.getElementById("current_time");
      currentTime.innerHTML = ` : ` + new Date();
      const displayName = document.getElementById("display-name");
      displayName.innerHTML = ` : ` + name;
      const displayDate = document.getElementById("display-date");
      displayDate.innerHTML = ` : ` + date;
      const displayGender = document.getElementById("display-gender");
      displayGender.innerHTML = ` : ` + gender;
      const displayMsg = document.getElementById("display-msg");
      displayMsg.innerHTML = ` : ` + msg;
    }
  });
}

//Hamburger Menu
function showNav() {
  const hamburger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("on");
  });
}
welcomePage();
showNav();
