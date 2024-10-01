class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  
    // Method to remove an item from the cart by product id
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.length;
    }
  
    // Method to display the cart items in the console
    displayCart() {
      if (this.items.length === 0) {
        console.log("The cart is empty.");
      } else {
        this.items.forEach(item => {
          console.log(
            `Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`
          );
        });
      }
    }
  
    // Method to get the total price of all items in the cart
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }

  // Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);
const product3 = new Product(3, "Headphones", 100);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); 
cart.addItem(product2, 2); 
cart.addItem(product3, 3); 

// Display the cart
console.log("Cart items after adding products:");
cart.displayCart();

// Display the total price of the cart
console.log(`Total Price of Cart: $${cart.getTotalPrice()}`);

// Remove an item from the cart
cart.removeItem(2); 

// Display the cart after removal
console.log("Cart items after removing phones:");
cart.displayCart();

// Display the total price of the cart after removal
console.log(`Total Price of Cart after removal: $${cart.getTotalPrice()}`);
