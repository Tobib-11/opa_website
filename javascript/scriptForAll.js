// INDEX Bilder

let pictures = [
  "/pictures/INDEXschnapschange/schnaps1.jpg",
  "/pictures/INDEXschnapschange/schnaps2.jpg",
  "/pictures/INDEXschnapschange/shcnapsvorstellung.webp",
];

let currentIndex = 0;
function changeImage(direction) {
  currentIndex = currentIndex + direction;

  if (currentIndex < 0) {
    currentIndex = pictures.length - 1;
  }
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementById("schnapsImage").src = pictures[currentIndex];
}

// Einkaufswagen
