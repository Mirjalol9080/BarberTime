
// let questionsItem = document.querySelectorAll('.questions-item');
// let questionsSection = document.querySelectorAll('.questions-section');

// for (let i = 0; i < questionsSection.length; i++) {
//   questionsSection[i].addEventListener('click', function () {
//     for (let j = 0; j < questionsItem.length; j++) {
//       // Hamma elementlarni yopamiz
//       questionsItem[j].classList.remove('open');
//     }
//     // Faqat joriy tanlangan elementni ochamiz
//     questionsItem[i].classList.add('open');
//   });
// }



let questionsItem = document.querySelectorAll('.questions-item');
let questionsSection = document.querySelectorAll('.questions-section');

for (let i = 0; i < questionsSection.length; i++){
  questionsSection[i].addEventListener('click',function(){

    let currentItem = questionsItem[i];

    if(currentItem.classList.contains('open')){
      currentItem.classList.remove('open')
    }else{
      for (let j = 0; j < questionsItem.length; j++){
        questionsItem[j].classList.remove('open')
      }
      questionsItem[i].classList.add('open')
    }

  })
}




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