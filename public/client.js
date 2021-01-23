const form = document.querySelector(".form");
const modal = document.getElementById("myModal");
const feedback = document.getElementById("feedback");
const text = document.getElementById("text");
const namedata = document.getElementById("name");
const email = document.getElementById("email");
const image = document.getElementById("image");
const holesInLeaves = document.getElementById("holes_in_leaves");
const yellowLeaves = document.getElementById("yellow_leaves");
const drySoil = document.getElementById("dry_soil");

/*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.textContent = "Thank you";
  modal.style.display = "block";
  drySoil.checked = false;
  yellowLeaves.checked = false;
  holesInLeaves.checked = false;
  namedata.value = "";
  email.value = "";
  text.value = "";
  image.value = "";
  setTimeout(async () => {
    modal.style.display = "none";
    const response = await fetch("/help");
    const json = await response.json();
    console.log(json);
  }, 3000);
});
*/
