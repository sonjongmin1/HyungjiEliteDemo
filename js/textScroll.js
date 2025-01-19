document.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let typing1 = document.querySelector(".typing1");
  let typing2 = document.querySelector(".typing2");
  let typing3 = document.querySelector(".typing3");

  let calWidth = (scroll, start, end) => {
    if (scroll < start) return 0;
    if (scroll > end) return 100;
    return ((scroll - start) / (end - start)) * 100;
  };

  typing1.style.width = `${calWidth(scrollY, 482, 595)}%`;

  typing2.style.width = `${calWidth(scrollY, 596, 709)}%`;

  typing3.style.width = `${calWidth(scrollY, 710, 832)}%`;
});

console.log(window.scrollY);
Test;
