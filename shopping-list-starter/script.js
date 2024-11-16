let shoppingListItems = ["milk", "eggs", "bread"];

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items"); // First we get the list element
    listElement.innerHTML = ""; // Then we clear it of any existing items

    //Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

updateItems();
// // Here we grab the ul from the HTML
// let listElement = document.getElementById("shopping-list-items");

// // Initial population of list
// for (const shoppingItem of shoppingListItems) {
//     console.log(shoppingItem); 
//     let itemElement = document.createElement("li"); // We create a list element
//     itemElement.innerText = shoppingItem; // Add the inner text to the list element
//     listElement.appendChild(itemElement); // Add the list element to the ul
// }

const addItem = () => {
let item = document.getElementById("new-item-text").value; // Fix the correct input element id
shoppingListItems = [...shoppingListItems, item]; // Add the new item to the shopping list
    updateItems(); // update list
};
