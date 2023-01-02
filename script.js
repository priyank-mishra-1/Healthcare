const form = document.getElementById('form');
const searchItem = document.getElementById('searchItem');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchItem.value!=""){
        document.location = 'not-found.html'
        searchItem.value = "";
    }
});

