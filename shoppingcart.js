//create store items and prices
const storeItems = {
    bread: 3,
    ramen: 7,
    tomato: 1,
    lettuce: 1,
    bacon: 3,

  };
  
  //initialize cart state
  const cart = [];
  let total = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
    const storeEl = document.getElementById('store-items');
    const cartEl  = document.getElementById('cart');
    const totalEl = document.getElementById('cart-total');
  
    //create buttons for store items
    Object.entries(storeItems).forEach(([name, price]) => {
      const btn = document.createElement('button');
      btn.textContent = name;
      //on click of button add to cart
      btn.addEventListener('click', () => {
        addToCart(name, price);
      });
      storeEl.appendChild(btn);
    });
  
    //add item then render cart
    function addToCart(name, price) {
        //if cart is 10 say its full
        if (cart.length >= 10) {
            alert("Your cart is full (max 10 items)!");
            return;
          }
          cart.push(name);
          total += price;
          renderCart();
    }
    
  
    //re render the list and cart total
    function renderCart() {
      cartEl.innerHTML = '';               
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;            
        cartEl.appendChild(li);
      });
      totalEl.textContent = total;        
    }
  
   // initial render
    renderCart();

  });
  