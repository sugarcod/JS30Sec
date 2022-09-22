window.onload = function () {
  console.log("io");
  let hour = document.querySelector(".hour-hand");
  let minute = document.querySelector(".min-hand");
  let second = document.querySelector(".second-hand");

  function pushClock() {
    let time = new Date();
    hour.style.transform = `rotate(${time.getHours() * 15 + 45}deg)`;
    hour.style.transformOrigin = "right";

    minute.style.transform = `rotate(${time.getMinutes() * 6 + 18}deg)`;
    minute.style.transformOrigin = "right";

    second.style.transform = `rotate(${time.getSeconds() * 6 + 18}deg)`;
    second.style.transformOrigin = "right";
  }

  setInterval(function () {
    pushClock();
  }, 1000);
};
