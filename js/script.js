// invite button
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

//Clear the Input Box
const clearInput = function () {
  guestInput.value = "";
};
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  // add class
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  //function body, create a variable  to hold an array
  const potluckItems = [
    "patato",
    "hummus",
    "yougurt",
    "cookies",
    "creme",
    "candy",
    "banana",
    "vin",
    "coffee",
    "vodka",
    "fish"
  ];

  //select ALL the list lements inside list with a class of “guest-list”.

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //add the item from the potluckItems array at the index position of randomPotluckIndex.
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    // create a new "li" element
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
