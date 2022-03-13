// Get form entries

const form = document.getElementById("waiting-list-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  return data;
});
