// Get form entries

const form = document.getElementById("waiting-list-form");

// Add waiting list array of objects for comparison

let waitingList = [
  {
    mobile: "+440123456789",
    email: "example@example.com",
  },
  {
    mobile: "+449876543211",
    email: "test@test.com",
  },
];

// Compare form data with waiting list data

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  compareData(userData);
});

function compareData(dataFromUser) {
  let onTheList = false;

  for (let i = 0; i < waitingList.length; i++) {
    if (
      waitingList[i].mobile === dataFromUser.mobile ||
      waitingList[i].email === dataFromUser.email
    ) {
      onTheList = true;
      break;
    }
  }
  return onTheList;
}
