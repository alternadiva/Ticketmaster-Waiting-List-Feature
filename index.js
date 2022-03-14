// Get form entries

const form = document.getElementById("waiting-list-form");

// Compare form data with waiting list data

function compareData(waitingList, userMobile, userEmail) {
  let onTheList = false;

  for (let i = 0; i < waitingList.length; i++) {
    if (
      waitingList[i].mobile === userMobile ||
      waitingList[i].email === userEmail
    ) {
      onTheList = true;
      break;
    }
  }
  return onTheList;
}

// Stub API

// Fetch fake promise

let waitingListValidation = fetch("./test/waiting-list.json")
  .then((response) => {
    if (!response.ok) {
      const error = new Error(response.status);
      throw error;
    }
    return response.json();
  })
  .then((data) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const userInputData = Object.fromEntries(formData);

      let userList = data.users;

      return compareData(userList, userInputData.mobile, userInputData.email);
    });
  })
  .catch(console.error);
