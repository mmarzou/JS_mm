// Get time and display it in the header
function launchTime() {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(launchTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Grocery list
let groceryList = "";

function addGrocery() {
  let groceryItem = document.getElementById("grocery-input").value; // Get value from input field
  let ul = document.createElement("ul"); // Create ul element
  let li = document.createElement("li"); // Create li element
  groceryList += groceryItem + ", "; // Add grocery item to grocery list
  if (groceryItem !== "") {
    li.appendChild(document.createTextNode(groceryItem)); // Add grocery item to li element
    ul.appendChild(li); // Add li element to ul element
    document.getElementById("grocery-list").appendChild(ul); // Add ul element to grocery list
    console.log(groceryItem);
    alert("You added an item to the list.");
  } else {
    alert("Please enter a valid grocery item.");
  }
}

function removeGrocery() {
  console.log(groceryList);
  let removeGroceryItem = document.getElementById("grocery-input").value; // Get value from input field
  let lastItem = document.getElementById("grocery-list").lastChild; // Remove grocery item from grocery list
  if (groceryList !== 0) {
    lastItem.remove(); // Remove last item from grocery list
    alert(`You removed ${removeGroceryItem} from the list.`);
    console.log(removeGroceryItem);
  } else {
    alert("There are no items in the list to be removed.");
  }
}

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("tel").value;
  let pw = document.getElementById("password").value;

  if (!fName) {
    alert("Please enter your name.");
  } else if (!fName) {
    alert("Please enter your email.");
  } else if (!lName) {
    alert("Please enter your last name.");
  } else if (!email) {
    alert("Please enter your email.");
  } else if (!tel) {
    alert("Please enter your phone number.");
  } else if (!pw) {
    alert("Please enter your password.");
  } else {
    alert("Thank you for submitting your information.");
  }
});

// Calculatrice
