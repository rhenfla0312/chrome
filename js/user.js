const form = document.querySelector('.form');
const input = document.querySelector('.form input');
const h1 = document.querySelector('h1');
const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
  form.classList.remove("hidden");
  form.addEventListener('submit', function(e) {
    const value = input.value;
    e.preventDefault();
    
    form.classList.add("hidden");
    localStorage.setItem("username", value)
    h1.innerHTML = value;
    h1.classList.remove("hidden"); 
  })
} else {
  h1.classList.remove("hidden");
  h1.innerHTML = savedUsername;
}