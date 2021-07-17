const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//

const greetings = [
  "Im good you little piece of love",
  "Doing good homeboi",
  "leave me alone",
];
const catchy = ["Not today", "Yes you just need ten more plastic surgeries "];
const weather = ["Weather is shit", "You need a tan!"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i do not know what you say";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  if (message.includes("handsome")) {
    const finalText = catchy[Math.floor(Math.random() * catchy.length)];
    speech.text = finalText;
  }
  if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.7;
  window.speechSynthesis.speak(speech);
}
