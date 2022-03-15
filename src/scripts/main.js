'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const initialX = wall.offsetLeft;
  const initialY = wall.offsetTop;

  if (e.target !== wall) {
    return false;
  }

  spider.style.left = e.clientX - initialX
  - parseFloat(spider.offsetWidth) / 2 + 'px';

  spider.style.top = e.clientY - initialY
  - parseFloat(spider.offsetHeight) / 2 + 'px';
});
