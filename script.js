function add(tag) {
  const el = document.createElement(tag);
  el.textContent = tag === 'button' ? 'Click' : 'Sample ' + tag;
  el.className = 'element';
  document.getElementById('canvas').appendChild(el);
}

function addImage(e) {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(e.target.files[0]);
  img.style.width = '300px';
  img.className = 'element';
  document.getElementById('canvas').appendChild(img);
}

function copyText() {
  let text = '';
  document.querySelectorAll('#canvas h1, #canvas p, #canvas button').forEach(el => text += el.textContent + '\n');
  navigator.clipboard.writeText(text.trim()).then(() => alert('Copied!'));
}

function download() {
  html2canvas(document.getElementById('canvas')).then(canvas => {
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'design.png';
    a.click();
  });
}
