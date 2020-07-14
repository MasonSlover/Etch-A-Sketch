

let mousePressed = false;
let lastX, lastY;
let ctx;
let canvas = document.getElementById("canvas");


document.ontouchmove = function(e){ e.preventDefault(); }




function InitThis() {



    // canvas.width = window.innerWidth;
    canvas.width = document.body.getBoundingClientRect().width;
    // canvas.height = window.innerHeight;
    canvas.height = document.body.getBoundingClientRect().height;

    ctx = document.getElementById('canvas').getContext("2d");

    $('#canvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#canvas').mousemove(function (e) {
        // if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        // }
    });

    $('#canvas').mouseup(function (e) {
        mousePressed = false;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });
    $('#canvas').mouseleave(function (e) {
        mousePressed = false;
        // Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });
}




canvas.ontouchmove = function(event){
    event.preventDefault();
    let newx = event.touches[0].clientX;
    let newy = event.touches[0].clientY;
    ctx.lineTo(newx,newy);

}

canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

function Draw(x, y, isDown) {
    // if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    // }
    lastX = x; lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

let btn = document.getElementById("top").addEventListener("click", function () {
    clearArea()
    console.log("Clicked border!");
});

