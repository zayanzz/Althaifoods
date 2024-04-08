function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hideSidebar();
    });
  });
});

// slider 

const slides = document.querySelectorAll('.slider');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  intervalId = setInterval(nextSlide, 6000);
}

function prevSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  intervalId = setInterval(nextSlide, 6000);
}

function startSlider() {
  intervalId = setInterval(nextSlide, 6000);
}

function stopSlider() {
  clearInterval(intervalId);
}

// Start slider on load
startSlider();


// / slider animation ///////////
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

  const words = elem.textContent.split(' ');
  elem.innerHTML = '';

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  elem.innerHTML = words.join(' ');

  const children = document.querySelectorAll('span > i');
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * .1}s`;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var elements = document.querySelectorAll('.animate');

    elements.forEach(function (element) {
      element.classList.add('animated');
    });
  }, 500); // Adjust the delay (in milliseconds) as needed
});

// sales team  
window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var bgImg = document.querySelector('.bg-img');
  bgImg.style.backgroundPosition = 'center ' + (-scrollTop / 3) + 'px';
});

// sub

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscription').classList.add('done');
});

// alert 
function error_call_submitation_failed() {
  alert('404 Error currently not available contact form please contact +97121892932')
}



