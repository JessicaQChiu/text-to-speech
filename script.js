/*Web Speech API - SpeechSynthesis (Text-to-Speech)*/

let text = document.getElementById("text");
let submitBtn = document.getElementById("submit");
let audioMessage;

submitBtn.addEventListener("click", () => {
  audioMessage.text = text.value;
  window.speechSynthesis.speak(audioMessage);
});

window.onload = () => {
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthese is not supported");
  }
};
