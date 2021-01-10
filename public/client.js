const form = document.querySelector(".form");
const input = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameData = input.value;
  const emailData = email.value;
  const textData = text.value;
  const data = { nameData, emailData, textData };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("/help", options);

  input.value = "";
  email.value = "";
  text.value = "";
});
