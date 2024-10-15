const words = ["Study Smarter, Not Harder"];
let wordIndex = 0;
let letterIndex = 0;
const typingSpeed = 150; 
const deletingSpeed = 100; 
const pauseBetweenWords = 2000; 
const dynamicTextElement = document.getElementById("dynamic-words");
function typeWord() {
 
 let currentWord = words[wordIndex];
 dynamicTextElement.innerHTML = currentWord.substring(0, letterIndex);
 letterIndex++;
 if (letterIndex <= currentWord.length) {
 
 setTimeout(typeWord, typingSpeed);
 } else {
 
 setTimeout(deleteWord, pauseBetweenWords);
 }
}
function deleteWord() {
 let currentWord = words[wordIndex];
 dynamicTextElement.innerHTML = currentWord.substring(0, letterIndex);
 letterIndex--;
 if (letterIndex >= 0) {
 
 setTimeout(deleteWord, deletingSpeed);
 } else {
 
 wordIndex = (wordIndex + 1) % words.length; 

 setTimeout(typeWord, typingSpeed);
 }
}

window.onload = function() {
 setTimeout(typeWord, pauseBetweenWords);
};

const countdownDate = new Date().getTime() + 12 * 60 * 60 * 1000; 

const countdownInterval = setInterval(function () {
 const now = new Date().getTime();
 const distance = countdownDate - now;
 
 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 document.getElementById("days").textContent = days;
 document.getElementById("hours").textContent = hours;
 document.getElementById("minutes").textContent = minutes;
 document.getElementById("seconds").textContent = seconds;
 
 if (distance < 0) {
 clearInterval(countdownInterval);
 document.getElementById("days").textContent = "0";
 document.getElementById("hours").textContent = "0";
 document.getElementById("minutes").textContent = "0";
 document.getElementById("seconds").textContent = "0";
 }
}, 1000);