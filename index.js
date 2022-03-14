// Get form entries

const form = document.getElementById("waiting-list-form");

// Compare form data with waiting list data

function compareData(waitingList, userMobile, userEmail) {
  let onTheList = false;

  for (let i = 0; i < waitingList.length; i++) {
    if (
      waitingList[i].mobile == userMobile &&
      waitingList[i].email == userEmail
    ) {
      onTheList = true;
      break;
    } else if (
      waitingList[i].mobile.length === 0 &&
      waitingList[i].email === userEmail
    ) {
      onTheList = false;
    } else if (
      waitingList[i].mobile === userMobile &&
      waitingList[i].email.length === 0
    ) {
      onTheList = false;
    }
  }
  return onTheList;
}

// Stub API

// Fetch fake promise

// Confirm subscription

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

      // New user object with mobile and email values

      let userObject = Object.keys(userInputData)
        .filter((key) => key === "mobile" || key === "email")
        .reduce((current, key) => {
          return Object.assign(current, { [key]: userInputData[key] });
        }, {});

      let userList = data.users;

      if (!compareData(userList, userInputData.mobile, userInputData.email)) {
        userList.push(userObject); //instead of POST method
        subscribedDOM(userInputData.mobile, userInputData.email);
        return "added to the list";
      } else {
        piorSubscribedDOM();
        throw "already on the list";
      }
    });
  })
  .catch(console.error);

// Render DOM for successful subscription
const formContainer = document.getElementById("form-content");

function subscribedDOM(inputMobile, inputEmail) {
  formContainer.innerHTML = `
  <h3>You're on the list!</h3>
  <p id="result">${inputMobile}</p>
  <p id="result">${inputEmail}</p>
  <p>We'll let you know if you are successful.</p>
  <p>Tickets will be sold on a first come first served basis, and are not guaranteed.</p>
  <a href="https://www.ticketmaster.co.uk"><button type="submit" class="button">View other dates</button></a>
  `;
}

// Render DOM for unsuccessful subscription
function piorSubscribedDOM() {
  document.getElementById("form-icon").src = "./assets/warning.png";
  formContainer.innerHTML = `
    <h3>You're already signed up!</h3>
    <p>We'll contact you if more tickets become available</p>
    <a href="https://www.ticketmaster.co.uk"><button type="submit" class="button">View other dates</button></a>
    `;
}
