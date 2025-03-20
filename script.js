// Pizza Order By Tito

// Add an Event listener to the button to run the placeholder function
document.getElementById("btn").addEventListener("click", pizzaOrder);

// Store order code in a function
function pizzaOrder() {
    // INPUT
    let size = prompt("Enter Size Of Pizza (Small, Medium, Large): ");
    let topping1 = prompt("Enter First Topping: ");
    let topping2 = prompt("Enter Second Topping: ");
    let pizzaSauce = prompt("What Pizza Sauce Would You Like? (Alfredo, Tomato, Ranch");

    // PROCESS
    let msg = `Your ${size} pizza with ${topping1} and ${topping2} with ${pizzaSauce} sauce will be ready soon!`;

    // OUTPUT
    alert(msg);
}