console.log("ji");
let wrapper = document.querySelector(".controls");

let spacing = document.querySelector("#spacing");
let blur = document.querySelector("#blur");
let base = document.querySelector("#base");

base.addEventListener("change", () => {
  document.querySelector(".img").style.border = `${+spacing.value}px solid ${
    base.value
  }`;
});

spacing.addEventListener("change", () => {
  document.querySelector(".img").style.border = `${+spacing.value}px solid  ${
    base.value
  }`;
});

blur.addEventListener("change", () => {
  document.querySelector(".img").style.filter = `blur(${+blur.value}px)`;
});
