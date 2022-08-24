// elements
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".white");
const blackKeys = document.querySelectorAll(".black");
const whiteWords = ["A", "S", "D", "T", "Y", "U", "I", "O", "L"];
const blackWords = ["W", "E", "F", "G", "H", "J", "K", "P"];
// play piano function
function playPiano(item) {
  const noteAudio = document.getElementById(item.dataset.note);
  // remove delay on play
  noteAudio.currentTime = 0;
  noteAudio.play();
}
keys.forEach((item) => {
  item.addEventListener("click", () => playPiano(item));
});
// handle keyboards
document.addEventListener("keydown", function (e) {
  const pressedKey = e.key;
  const whiteKeyIndex = whiteWords.indexOf(pressedKey.toUpperCase());
  const blackKeyIndex = blackWords.indexOf(pressedKey.toUpperCase());
  whiteKeyIndex > -1 && playPiano(whiteKeys[whiteKeyIndex]);
  blackKeyIndex > -1 && playPiano(blackKeys[blackKeyIndex]);
});