/* */

// Global Query Selectors
const productContainer = document.querySelector(".products__container");
const modalContainer = document.querySelector(".modal-container");
const pNameInput = document.querySelector("#pName");

const form = document.querySelector("form");

/* */

// Class: for creating new product
class Product {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.id = Math.random();
  }
}

/* */
// //// LOCAL STORAGE ////

// Function: Retrieve products from local storage
function getProducts() {
  let products;
  if (localStorage.getItem("productManager.products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("productManager.products"));
  }
  return products;
}

// Function: Add a product to local storage
function addProdcutToLocalStorage(product) {
  const products = getProducts();
  products.push(product);
  localStorage.setItem("productManager.products", JSON.stringify(products));
}

// Function: Remove product from local storage
function removeProduct(id) {
  const products = getProducts();
  products.forEach((product, index) => {
    if (product.id === id) {
      products.splice(index, 1);
    }
    localStorage.setItem("productManager.products", JSON.stringify(products));
  });
}

/* */
// UI UPDATES
// Function: Create new Product in UI

function addProductToList(Product) {
  const newUIProduct = document.createElement("div");

  newUIProduct.classList.add("product");

  newUIProduct.innerHTML = `
    <span hidden>${Product.id}</span>
    <h2 class= "product__name">${Product.name}</h2>
    <p class="product__description">${Product.description}</p>
    <div class="product__actions">
        <button class="product__action product__view">
            View detail
        </button>
        <button class="product__action product__delete">
            Delete Product
        </button>
    </div>
  `;
  productContainer.appendChild(newUIProduct);
}

/* */

// Function: Show notes in UI
function displayProducts() {
  const products = getProducts();
  products.forEach((product) => {
    addProductToList(product);
  });
}

// Function: Show alert message
function showAlertMessage(message, classL) {
  const alertDiv = document.createElement("div");

  alertDiv.className = `message ${classL}-message`;
  alertDiv.appendChild(document.createTextNode(message));

  form.insertAdjacentElement("beforebegin", alertDiv);
  pNameInput.focus();
  setTimeout(() => alertDiv.remove(), 2000);

  console.log(alertDiv);
}

/* */

// Function: View product in modal

function activateModal(name, desc) {
  const modalTitle = document.querySelector(".modal__title");
  const modalBody = document.querySelector(".modal__body");
  modalTitle.textContent = name;
  modalBody.textContent = desc;

  modalContainer.classList.add("active");
}

/* */

// Event: Close Modal
const modalBtn = document
  .querySelector(".modal__btn")
  .addEventListener("click", () => {
    modalContainer.classList.remove("active");
  });

/* */

// Event: Note Buttons
productContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__view")) {
    const currentProduct = e.target.closest(".product");
    const currentName =
      currentProduct.querySelector(".product__name").textContent;
    const currentDesc = currentProduct.querySelector(
      ".product__description"
    ).textContent;
    activateModal(currentName, currentDesc);
  }

  if (e.target.classList.contains("product__delete")) {
    const currentProduct = e.target.closest(".product");
    showAlertMessage("Product successfully deleted!", "remove");
    currentProduct.remove();
    const id = currentProduct.querySelector("span").textContent;
    removeProduct(Number(id));
  }
});

// Event: Display Products
document.addEventListener("DOMContentLoaded", displayProducts);

// Event: Product Form Submit

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pDescInput = document.querySelector("#pDesc");

  //   Validate inputs
  if (pNameInput.value.length > 0 && pDescInput.value.length > 0) {
    /* */

    // Create new product
    const newProduct = new Product(pNameInput.value, pDescInput.value);

    // Add product to list
    addProductToList(newProduct);
    addProdcutToLocalStorage(newProduct);

    // Clear input fields
    pNameInput.value = "";
    pDescInput.value = "";

    // Show alert message
    showAlertMessage("Product Successfully added!", "success");

    // Set input focus
    pNameInput.focus();
  } else {
    showAlertMessage("Please add both name and description!", "danger");
  }
});
