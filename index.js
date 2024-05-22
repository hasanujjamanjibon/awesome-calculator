const audio = document.querySelector("#audio");
const btns = document.querySelectorAll("#button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    audio.play();
  });
});
