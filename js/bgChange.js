let bgChange = document.getElementById("bgChange");
let bgFlag = false;
let iframeCh = document.getElementById("iframeCh");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1938) {
    bgChange.classList.add("on");
  } else {
    bgChange.classList.remove("on");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 2650) {
    iframeCh.classList.add("on");
  } else {
    iframeCh.classList.remove("on");
  }
});

console.log(window.scrollY);
