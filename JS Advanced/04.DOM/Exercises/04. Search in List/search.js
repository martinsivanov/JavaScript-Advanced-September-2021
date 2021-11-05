function search() {
   let towns = document.querySelectorAll('ul li');
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (let i = 0; i < [...towns].length; i++) {
      let word = towns[i].textContent;
      
      if (word.includes(search)) {
         towns[i].style.textDecoration = 'underline';
         towns[i].style.fontWeight = 'bold';
         matches++;
      } else {
         towns[i].style.textDecoration = '';
         towns[i].style.fontWeight = '';
      }
      
   }
   result.textContent = `${matches} matches found`;
}
