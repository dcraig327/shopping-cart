////////////////////////////////////////////////////////////////////////////////
// Welcome to the fun!
//
// My first DOM manip project
////////////////////////////////////////////////////////////////////////////////

//------------------------------------------------------------------------------
// Globals
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Library
//------------------------------------------------------------------------------
function setTitle(title) {
  document.title = title;
}

function removeBodyContent() {
  document.body.innerHTML = "";
}

function appendElement(parent, elementName, className, text = "") {
  const element = document.createElement(elementName);
  element.classList.add(className);
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

function addCssFile(fileName) {
  let head = document.head;
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = fileName;
  head.appendChild(link);
}

function toggleButton() {
  this.classList.toggle("button-enabled");
  this.classList.toggle("button-disabled");
  this.removeEventListener("click", toggleButton);
}
function enableButton(button) {
  button.classList.add("button-enabled");
  button.classList.remove("button-disabled");
}
function disableButton(button) {
  button.classList.remove("button-enabled");
  button.classList.add("button-disabled");
}

//------------------------------------------------------------------------------
// Content
//------------------------------------------------------------------------------
function createHead() {
  setTitle("Vivus Viral Shopping Cart");
  addCssFile("style.css");
}

function createHeader() {
  const header = appendElement(document.body, "div", "header");
  appendElement(header, "div", "header-logo", "Buy It Now!");
  appendElement(header, "div", "empty");
  appendElement(header, "div", "header-cart-button", "0");
}

function createStore() {
  const store = appendElement(document.body, "div", "store");
  appendElement(store, "div", "store-title", "Buy It Now! or Leave the Store!");
  const storeItems = appendElement(store, "div", "store-items");
  const storeItem1 = appendElement(storeItems, "div", "store-item");
  appendElement(storeItem1, "div", "store-item-image", "placeholder");
  appendElement(storeItem1, "div", "store-item-name", "pizza");
  const storeButton1 = appendElement(
    storeItem1,
    "button",
    "store-item-button-add",
    "add"
  );
  enableButton(storeButton1);
  storeButton1.addEventListener("click", toggleButton);

  const storeItem2 = appendElement(storeItems, "div", "store-item");
  appendElement(storeItem2, "div", "store-item-image", "placeholder");
  appendElement(storeItem2, "div", "store-item-name", "pineapple");
  const storeButton2 = appendElement(
    storeItem2,
    "button",
    "store-item-button-add",
    "add"
  );
  enableButton(storeButton2);
  storeButton2.addEventListener("click", toggleButton);

  const storeItem3 = appendElement(storeItems, "div", "store-item");
  appendElement(storeItem3, "div", "store-item-image", "placeholder");
  appendElement(storeItem3, "div", "store-item-name", "grape");
  const storeButton3 = appendElement(
    storeItem3,
    "button",
    "store-item-button-add",
    "add"
  );
  enableButton(storeButton3);
  storeButton3.addEventListener("click", toggleButton);
}

function createCart() {
  const cart = appendElement(document.body, "div", "cart");
  appendElement(cart, "div", "cart-title", "Shopping Cart");
  const cartItems = appendElement(cart, "div", "cart-items");
  const cartItem1 = appendElement(cartItems, "div", "cart-item");
  appendElement(cartItem1, "div", "cart-item-image", "placeholder");
  appendElement(cartItem1, "div", "cart-item-name", "pizza");
  const cartButton1 = appendElement(
    cartItem1,
    "button",
    "cart-item-button-remove",
    "remove"
  );
  disableButton(cartButton1);

  const cartItem2 = appendElement(cartItems, "div", "cart-item");
  appendElement(cartItem2, "div", "cart-item-image", "placeholder");
  appendElement(cartItem2, "div", "cart-item-name", "pineapple");
  const cartButton2 = appendElement(
    cartItem2,
    "button",
    "cart-item-button-remove",
    "remove"
  );
  disableButton(cartButton2);

  const cartItem3 = appendElement(cartItems, "div", "cart-item");
  appendElement(cartItem3, "div", "cart-item-image", "placeholder");
  appendElement(cartItem3, "div", "cart-item-name", "grape");
  const cartButton3 = appendElement(
    cartItem3,
    "button",
    "cart-item-button-remove",
    "remove"
  );
  disableButton(cartButton3);
}

function createPage() {
  removeBodyContent();
  createHead();

  createHeader();
  createStore();
  createCart();
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------
function main() {
  createPage();
}

////////////////////////////////////////////////////////////////////////////////
main();
