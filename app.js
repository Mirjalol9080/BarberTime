// Marquee elementini tanlaymiz
const marquee = document.querySelector(".marque");

// Hover qilganda to'xtatish
marquee.addEventListener("mouseover", () => {
  marquee.stop(); // Marquee to'xtaydi
});

// Hoverdan chiqishda davom ettirish
marquee.addEventListener("mouseout", () => {
  marquee.start(); // Marquee qayta harakat qiladi
});



const music = document.getElementById("background-music");
  const playButton = document.getElementById("play-music");

  playButton.addEventListener("click", () => {
    music.play();
    playButton.style.display = "none"; // Tugmani yashirish
  });