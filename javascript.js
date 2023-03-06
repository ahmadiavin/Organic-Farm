const carousel = document.querySelector('#carousel');
const images = carousel.querySelectorAll('img');
const numImages = images.length;
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % numImages;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); 
showImage(currentIndex);
