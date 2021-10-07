function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField');
      let inputTextToLower = inputText.value.toLowerCase();
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach(el => {
         let row = el.textContent.toLowerCase();
         if (row.includes(inputTextToLower)) {
            el.classList.add('select')
         } else {
            el.classList.remove('select');
         }
      });
      inputText.value = '';
   }
}