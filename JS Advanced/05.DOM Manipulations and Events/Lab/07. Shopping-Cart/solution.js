function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut)

   let textArea = document.getElementsByTagName('textArea')[0];

   let result = [];
   textArea.value = '';

   function onClick(ev) {
      if (ev.target.classList.contains('add-product') && ev.target.tagName == 'BUTTON') {
         let product = ev.target.parentNode.parentNode;
         let productName = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);
         result.push({
            productName,
            price
         });

         textArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkOut(ev) {
      let products = new Set();
      result.forEach(el => { products.add(el.productName) });
      let total = result.reduce((t, c) => t + c.price, 0);
      textArea.value += `You bought ${Array.from(products.keys()).join(', ')} for ${total.toFixed(2)}.`  
   }
}