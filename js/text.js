let typing1 = document.querySelector(".typing1");
let typing2 = document.querySelector(".typing2");
let typing3 = document.querySelector(".typing3");

let i1 = 0; // 문자열 인덱스
let i2 = 0; // 문자열 인덱스
let i3 = 0; // 문자열 인덱스
let a1 = ""; // 결과 문자열 초기화
let a2 = ""; // 결과 문자열 초기화
let a3 = ""; // 결과 문자열 초기화
let c1 = "혁신과 열정으로 글로벌 패션의"; // 출력할 문자열
let c2 = "미래를 선도합니다."; // 출력할 문자열
let c3 = "형지엘리트"; // 출력할 문자열

let interval1, interval2, interval3;
let isExecuted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 390 && !isExecuted) {
    isExecuted = true;
    if (typing1) {
      interval1 = setInterval(() => {
        if (i1 < c1.length) {
          typing1.classList.add("on");
          a1 += c1[i1];
          typing1.textContent = a1;
          i1++;
        }
      }, 100);
    }

    setTimeout(() => {
      if (typing2) {
        interval2 = setInterval(() => {
          if (i2 < c2.length) {
            typing2.classList.add("on");
            a2 += c2[i2];
            typing2.textContent = a2;
            i2++;
          }
        }, 100);
      }
    }, 2000);

    setTimeout(() => {
      if (typing3) {
        interval3 = setInterval(() => {
          if (i3 < c3.length) {
            typing3.classList.add("on");
            a3 += c3[i3];
            typing3.textContent = a3;
            i3++;
          }
        }, 100);
      }
    }, 3000);
  }
});
