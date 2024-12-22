const thumbnails = document.querySelectorAll('.thumbnail'); 
const modal = document.getElementById('myModal'); 
const modalImage = document.getElementById('modalImage'); 
const closeButton = document.querySelector('.close'); 

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    modalImage.src = thumbnail.src;
    modal.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    toggleButton.classList.add('dark-theme');
    toggleButton.textContent = 'Switch to Light Theme';
} else {
    body.classList.remove('dark-theme');
    toggleButton.classList.remove('dark-theme');
    toggleButton.textContent = 'Switch to Dark Theme';
}

toggleButton.addEventListener('click', () => {

    body.classList.toggle('dark-theme');
    toggleButton.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Switch to Light Theme';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Switch to Dark Theme';
    }
});

function myFunction() {
  let element = document.getElementById("myDIV");
  let button = document.getElementById("button");

  if (element.style.display == "none") {
      element.style.display = "block";
      button.innerText = "Read More";
  }
}

let acc = document.getElementsByClassName("accordion");
let a;
for (a = 0; a < acc.length; a++){
  acc[a].addEventListener("click", function() {

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    } else {
      panel.style.display = "block";
    }
  })
}

document.getElementById("view-more-btn").addEventListener("click", function(){
  window.location.href = "diets-details.html";
})


