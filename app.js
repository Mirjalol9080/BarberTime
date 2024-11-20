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