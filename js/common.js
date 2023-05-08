const typingAnimation = document.querySelector('.typing-animation');
const textToType = "Hello World!"; // タイプする文字列
let charIndex = 0;

function typeLetter() {
  const char = textToType[charIndex];
  typingAnimation.textContent += char;
  charIndex++;
  if (charIndex === textToType.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(typeLetter, 100);
