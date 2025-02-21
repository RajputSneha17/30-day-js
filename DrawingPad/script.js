const canvas = document.querySelector("#canvas");
const colorInput = document.querySelectorAll(".colorInput");
const eraser = document.querySelector(".Eraser");
const brush = document.querySelector(".brush");
const clear = document.querySelector(".clear");
const rangeInput = document.querySelector("#rangeInput");
const circle = document.querySelector(".circle");
const rectangle = document.querySelector(".rectangle");
const triangle = document.querySelector(".triangle");
const fillcolor = document.querySelector("#fillcolor");

const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
let color = "black";
let isErasing = false;
let isBrushActive = false;
let isCircleActive = false;
let isRectangleActive = false;
let isTriangleActive = false;
let range = rangeInput.value;
let startX, startY, tempCanvas;

// Update color based on input
colorInput.forEach(input => {
    input.addEventListener("input", function () {
        if (!isErasing) {
            color = this.value;
        }
    });
});

// Store original canvas state
function saveCanvasState() {
    tempCanvas = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

// Restore canvas state
function restoreCanvasState() {
    if (tempCanvas) {
        ctx.putImageData(tempCanvas, 0, 0);
    }
}

// Update brush size
rangeInput.addEventListener("input", function() {
    range = this.value;
});

// Brush logic
brush.addEventListener("click", function () {
    resetActiveTools();
    brush.classList.add("active");
    isBrushActive = true;
});

// Eraser logic
eraser.addEventListener("click", function () {
    resetActiveTools();
    eraser.classList.add("active");
    isBrushActive = true;
    isErasing = true;
    color = "white";
});

// Circle logic
circle.addEventListener("click", function () {
    resetActiveTools();
    circle.classList.add("active"); 
    isCircleActive = true;
});

// Rectangle logic
rectangle.addEventListener("click", function () {
    resetActiveTools();
    rectangle.classList.add("active"); 
    isRectangleActive = true;
});

// Triangle logic
triangle.addEventListener("click", function () {
    resetActiveTools();
    triangle.classList.add("active"); 
    isTriangleActive = true;
});

// Reset active tools
function resetActiveTools() {
    eraser.classList.remove("active");
    brush.classList.remove("active");
    circle.classList.remove("active");
    rectangle.classList.remove("active");
    triangle.classList.remove("active");
    isBrushActive = false;
    isErasing = false;
    isCircleActive = false;
    isRectangleActive = false;
    isTriangleActive = false;
}

// Start drawing
canvas.addEventListener("mousedown", function (e) {
    if (isBrushActive) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    } else if (isCircleActive || isRectangleActive || isTriangleActive) {
        startX = e.offsetX;
        startY = e.offsetY;
        isDrawing = true;
        saveCanvasState(); 
    }
});

// Mouse move 
canvas.addEventListener("mousemove", function (e) {
    if (!isDrawing) return;

    if (isBrushActive) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = color;
        ctx.lineWidth = range;
        ctx.stroke();
    } else {
        restoreCanvasState();
        let width = e.offsetX - startX;
        let height = e.offsetY - startY;

        if (isCircleActive) {
            let radius = Math.sqrt(width * width + height * height);
            drawCircle(startX, startY, radius, true);
        } else if (isRectangleActive) {
            drawRectangle(startX, startY, width, height, true);
        } else if (isTriangleActive) {
            drawTriangle(startX, startY, e.offsetX, e.offsetY, true);
        }
    }
});

// Mouse up 
canvas.addEventListener("mouseup", function (e) {
    if (isDrawing) {
        let width = e.offsetX - startX;
        let height = e.offsetY - startY;

        if (isCircleActive) {
            let radius = Math.sqrt(width * width + height * height);
            drawCircle(startX, startY, radius, false);
        } else if (isRectangleActive) {
            drawRectangle(startX, startY, width, height, false);
        } else if (isTriangleActive) {
            drawTriangle(startX, startY, e.offsetX, e.offsetY, false);
        }
    }
    isDrawing = false;
});

// Draw Circle
function drawCircle(x, y, radius, isPreview) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = range;
    if (fillcolor.checked && !isPreview) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    ctx.stroke();
}

// Draw Rectangle
function drawRectangle(x, y, width, height, isPreview) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.strokeStyle = color;
    ctx.lineWidth = range;
    if (fillcolor.checked && !isPreview) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    ctx.stroke();
}

// Draw Triangle
function drawTriangle(x1, y1, x2, y2, isPreview) {
    let midX = (x1 + x2) / 2; 
    ctx.beginPath();
    ctx.moveTo(midX, y1); 
    ctx.lineTo(x1, y2); 
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = range;
    if (fillcolor.checked && !isPreview) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    ctx.stroke();
}

// Clear logic
clear.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save logic
const save = document.querySelector(".save");
save.addEventListener("click", function () {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png";
    link.click();
});
