function search() {
   let word = document.getElementById('searchText').value;
   let townsCollection = Array.from(document.getElementsById('#towns li'));
   let count = 0;

   for(let town of townsCollection){
      if(town.textContent.includes(word)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'undreline';
         count++;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
}
