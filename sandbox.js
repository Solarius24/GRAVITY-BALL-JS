const ball = document.getElementById("ball");
const info = document.getElementById("info");
let gravity = 1;
let y = 1;

setInterval(function () {
  if (y > 420) {
    gravity = -gravity;
  }
  gravity += 1;
  y += gravity;
  ball.style.top = y + "px";
  info.innerText = `Y: ${y} G: ${gravity}`;
  if (y > 440) {
    location.reload();
  }
}, 100);

// function game() {
//   if (y > 420) {
//     gravity = -gravity;
//   }

//   gravity += 1;
//   y += gravity;
//   ball.style.top = y + "px";
//   info.innerText = `Y: ${y} G: ${gravity}`;
//   window.requestAnimationFrame(game);
//   if (y > 440) {
//     location.reload();
//   }
// }

// window.requestAnimationFrame(game);
