const dino = document.getElementById('dino');
const rocks = document.getElementById('rocks');

const jump = () => {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    setTimeout(() => {
      dino.classList.remove('jump');
    }, 300);
  }
};

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let rocksLeft = parseInt(
    window.getComputedStyle(rocks).getPropertyValue('left')
  );

  if (rocksLeft < 50 && dinoTop > 140) {
    alert('Game Over :(');
  }
}, 10);

document.addEventListener('keydown', () => {
  jump();
});
