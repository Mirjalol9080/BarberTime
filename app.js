
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
let questionsSectionIcon = document.querySelectorAll('.questions-section_l__icon');

for (let i = 0; i < questionsSection.length; i++) {
  questionsSection[i].addEventListener('click', function () {
    let currentItem = questionsItem[i];
    let currentIcon = questionsSectionIcon[i]; // Har bir iconni o'zi bilan ishlash

    if (currentItem.classList.contains('open')) {
      currentItem.classList.remove('open');
      currentIcon.textContent = "+"; // O'z iconni o'zgartirish
    } else {
      // Barcha savollarni yopish
      for (let j = 0; j < questionsItem.length; j++) {
        questionsItem[j].classList.remove('open');
        questionsSectionIcon[j].textContent = "+"; // Barcha iconlarni yangilash
      }
      // Tanlangan savolni ochish
      currentItem.classList.add('open');
      currentIcon.textContent = "-"; // O'z iconni o'zgartirish
    }
  });
}

let chat = document.querySelector('.chat');
let chatNav = document.querySelector('.chat-nav'); 

chatNav.addEventListener('click', function(){
  chat.classList.toggle('active')
})








let input = document.querySelector('.chat-input');
let button = document.querySelector('.chat-input_sbt');
let list = document.querySelector('.list');
let resetTask = document.querySelector('.chat-restart__icon');
let todos = [];
function generateID() {}

button.addEventListener('click', function() {
  if (input.value.trim() === '') return; 
  let obj = {
      id: generateID(),
      title: input.value,
      isDone: false
  };
  todos.push(obj);
  generateTodo();
  input.value = '';
  console.log(todos);
});
function deleteTodo(id) {
  todos = todos.filter(item => item.id !== id);
  generateTodo();
}
function generateTodo() {
  list.innerHTML = ''; 
  for (let todo of todos) {
      let p = document.createElement('p');
      p.innerText = todo.title;
      list.appendChild(p);
      
  }
}
resetTask.addEventListener('click', function() {
  todos = []; 
  generateTodo();
});











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