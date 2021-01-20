const form = document.querySelector(".form");
const input = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");
const holesInLeaves = document.getElementById("holes_in_leaves");
const yellowLeaves = document.getElementById("yellow_leaves");
const drySoil = document.getElementById("dry_soil");
const modal = document.getElementById("myModal");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameData = input.value;
  const emailData = email.value;
  const textData = text.value;
  let drySoilData = false;
  let holesInLeavesData = false;
  let yellowLeavesData = false;
  if (drySoil.checked) {
    drySoilData = true;
  }
  if (holesInLeaves.checked) {
    holesInLeavesData = true;
  }
  if (yellowLeaves.checked) {
    yellowLeavesData = true;
  }

  const data = {
    nameData,
    emailData,
    textData,
    drySoilData,
    yellowLeavesData,
    holesInLeavesData,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("/help", options);

  modal.style.display = "block";

  feedback.textContent = `Thank you ${nameData}. We will be in touch 🙂`;

  input.value = "";
  email.value = "";
  text.value = "";
  yellowLeaves.checked = false;
  drySoil.checked = false;
  holesInLeaves.checked = false;
  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
});
