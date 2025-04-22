document.addEventListener("DOMContentLoaded", () => { //Navigation
  const navLinks = [
    { text: "Home", href: "#mainContent" },
    { text: "About", href: "./extra pages/aboutus.html" },
    { text: "Ai Article", href: "./extra pages/aiarticle.html" },
    { text: "Toxic Culture", href: "./extra pages/Toxicculture.html" },
    { text: "Coding Article", href: "./extra pages/codingarticle.html" },
    { text: "Focus", href: "./extra pages/Focusarticle.html" },
    { text: "Edit", href: "./Lyrical by Js/main.html" },
    { text: "Voiceover", href: "./extra pages/voiceover.html" },
    { text: "Feedback", href: "./extra pages/form.html" },
  ];

  const navLinksContainer = document.getElementById("navLinks");

  navLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
     a.target = "_blank"
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });
});

const welcomeScreen = document.getElementById('welcomeScreen');//welcomescreen
const mainContent = document.getElementById('mainContent');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const navMenu = document.querySelector('.nav-menu');
const footer = document.querySelector('.footer');

viewMoreBtn.addEventListener('click', () => {

  welcomeScreen.classList.add('hidden');

  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    mainContent.classList.add('visible');
    navMenu.classList.add('visible'); 
    footer.style.display = 'block';  
  }, 1000);
});

const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;

 
const firstClone = slideImages[0].cloneNode(true);
const lastClone = slideImages[totalSlides - 1].cloneNode(true);


slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideImages[0]);


slides.style.transform = `translateX(-100%)`;

function updateSlidePosition() {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex >= totalSlides - 1) {

    currentIndex++;
    updateSlidePosition();
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-100%)`;
      currentIndex = 0;
    }, 500); 
  } else {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex <= 0) {

    currentIndex--;
    updateSlidePosition();
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${totalSlides * 100}%)`;
      currentIndex = totalSlides - 1;
    }, 500);  
  } else {
    currentIndex--;
    updateSlidePosition();
  }
});


