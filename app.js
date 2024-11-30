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



document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("background-music");

  // Musiqani avtomatik ijro qilishga urinish
  const playMusic = async () => {
    try {
      await music.play();
      console.log("Musiqa avtomatik ijro qilindi!");
    } catch (error) {
      console.warn("Avtomatik ijro bloklandi. Foydalanuvchi harakati talab qilinadi.");
    }
  };

  playMusic();
});