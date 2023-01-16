const form = document.getElementById('form');
const searchItem = document.getElementById('searchItem');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchItem.value!=""){
        document.location = 'not-found.html'
        searchItem.value = "";
    }
});

const url = document.URL;
const login = document.getElementsByClassName('login')[0];
const message = document.getElementsByClassName('w-message')[0];

console.log(url);
if(url !== "http://127.0.0.1:5500/index.html"){
    login.style.display = 'none';
    message.innerText = "Welcome, " + url.substring(42);
}
else{
    login.style.display = 'flex';
    message.innerText = "";
}

