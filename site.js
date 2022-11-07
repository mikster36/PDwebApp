const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const height = 451;
const width = 801;

// resize canvas (CSS does scale it up or down)
canvas.height = height;
canvas.width = width;

let drawing = false;

function startDrawing(e) {
    drawing = true;
    context.beginPath();
}

window.addEventListener("mousedown", startDrawing);

function endDrawing(e) {
    drawing = false;
}

window.addEventListener("mouseup", endDrawing);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;
  
    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY
    }
}

function draw(e) {
    if (!drawing) return;

    let { x, y } = getMousePos(canvas, e);

    context.lineTo(x, y);
    context.stroke();
}

window.addEventListener("mousemove", draw);

function startDrawing(e) {
    drawing = true;
    context.beginPath();
    draw(e);
}

context.lineWidth = 1;
context.lineCap = "round";

