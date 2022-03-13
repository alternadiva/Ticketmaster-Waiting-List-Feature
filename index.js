// Get form entries

const form = document.getElementById("waiting-list-form");

// Add waiting list array of objects for comparison

let waitingList = [
  {
    mobile: "+440123456789",
    email: "example@example.com",
  },
  {
    mobile: "+449876543210",
    email: "test@test.com",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
});
