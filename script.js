const stage = document.getElementById('stage');
const shape = document.getElementById('shape');

function updateShape() {

  let size = Math.floor(Math.random() * 81) + 20;


  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = 'rgb(' + r + ',' + g + ',' + b + ')';

  let forms = ['circle', 'square', 'triangle'];
  let type = forms[Math.floor(Math.random() * forms.length)];

  shape.style.border = 'none';
  shape.style.borderLeft = '';
  shape.style.borderRight = '';
  shape.style.borderBottom = '';
  shape.style.borderRadius = '0';
  shape.style.background = color;

  if (type === 'triangle') {
    let half = Math.round(size / 2);
    shape.style.width = '0';
    shape.style.height = '0';
    shape.style.background = 'transparent';
    shape.style.borderLeft = half + 'px solid transparent';
    shape.style.borderRight = half + 'px solid transparent';
    shape.style.borderBottom = size + 'px solid ' + color;
  } else {
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.background = color;
    if (type === 'circle') {
      shape.style.borderRadius = '50%';
    }
  }

  let stageWidth = stage.clientWidth;
  let stageHeight = stage.clientHeight;
  let left = Math.floor(Math.random() * (stageWidth - size));
  let top = Math.floor(Math.random() * (stageHeight - size));
  shape.style.left = left + 'px';
  shape.style.top = top + 'px';
}

shape.onclick = updateShape;


updateShape();
