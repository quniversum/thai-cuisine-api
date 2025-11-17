// 1. Get a reference to the button and the container.
const menuButton = document.getElementById("fetch-menu-btn");
const menuContainer = document.getElementById("menu-container");

// 2. Define our "fake" API data.
const menuData = [
  {
    id: "pad-thai",
    name: "Pad Thai",
    description:
      "The classic stir-fried rice noodle dish with shrimp, tofu, peanuts, and a tangy-sweet sauce.",
    price: 14.5,
    spicinessLevel: 2,
    isVegetarian: false,
  },
  {
    id: "green-curry",
    name: "Green Curry",
    description:
      "A rich and spicy coconut milk-based curry with chicken, bamboo shoots, and Thai basil.",
    price: 15.0,
    spicinessLevel: 4,
    isVegetarian: false,
  },
  {
    id: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    description:
      "A classic Thai dessert of sweet sticky rice with fresh mango slices and coconut cream.",
    price: 8.5,
    spicinessLevel: 0,
    isVegetarian: true,
  },
];

// 3. Listen for a "click" event on our button.
menuButton.addEventListener("click", () => {
  // First, clear any old menu items.
  menuContainer.innerHTML = "";

  // 4. Loop through each dish in our menuData array.
  menuData.forEach((dish) => {
    // Create a new <div> element for the dish.
    const dishElement = document.createElement("div");
    dishElement.classList.add("dish");

    // Create the HTML content for the dish.
    dishElement.innerHTML = `
            <h3>${dish.name} - $${dish.price.toFixed(2)}</h3>
            <p>${dish.description}</p>
            <p><em>Spiciness: ${dish.spicinessLevel}/5 | Vegetarian: ${
      dish.isVegetarian ? "Yes" : "No"
    }</em></p>
        `;

    // 5. Add the new dish element to the page.
    menuContainer.appendChild(dishElement);
  });
});
