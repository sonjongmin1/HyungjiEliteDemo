let prev = document.getElementById("prev");
let next = document.getElementById("next");
let mainSlide = document.querySelector(".sec3MidBox");
let imgWidth = mainSlide.querySelector(".mainSlide").clientWidth; //1199px
mainSlide.style.left = `${imgWidth * -1}px`;
let mainSlideAll = document.querySelectorAll(".mainSlide");

// 버튼 상태 관리 변수
let isAnimating = false;

const callback = () => {
  mainSlide.style.transition = "none";
  mainSlide.style.left = imgWidth * -1 + "px";
  mainSlide.prepend(mainSlide.lastElementChild);
  isAnimating = false; // 애니메이션 완료 후 버튼 활성화
};

prev.addEventListener("click", function () {
  if (isAnimating) return; // 애니메이션 중이면 클릭 무시
  isAnimating = true; // 애니메이션 시작 시 버튼 비활성화
  mainSlide.style.transition = "left 1.5s";
  mainSlide.style.left = 0;
  setTimeout(callback, 1500);
  mainSlideAll.forEach((i, z) => {
    if (i.classList.contains("active")) {
      console.log(z);
      i.previousElementSibling.classList.add("active");
      i.classList.remove("active");
    }
  });
});

next.addEventListener("click", function () {
  if (isAnimating) return; // 애니메이션 중이면 클릭 무시
  isAnimating = true; // 애니메이션 시작 시 버튼 비활성화
  mainSlide.style.transition = "left 1.5s";
  mainSlide.style.left = `${imgWidth * -2}px`; // 현재 위치에서 왼쪽으로 한 칸 이동
  setTimeout(() => {
    mainSlide.style.transition = "none"; // 애니메이션 해제
    mainSlide.style.left = `${imgWidth * -1}px`; // 원래 위치로 복구
    mainSlide.append(mainSlide.firstElementChild); // 첫 번째 이미지를 맨 뒤로 이동
    isAnimating = false; // 애니메이션 완료 후 버튼 활성화
  }, 1500);
  mainSlideAll.forEach((i, z) => {
    if (i.classList.contains("active")) {
      console.log(z);
      i.nextElementSibling.classList.add("active");
      i.classList.remove("active");
    }
  });
});
