// elements
const $ = document;
const keys = $.querySelectorAll(".key");
keys.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedBtn = item.dataset.note;
    const noteAudio = document.getElementById(item.dataset.note);
    // remove delay on play
    noteAudio.currentTime = 0;
    noteAudio.play();
    console.log(selectedBtn);
  });
});
