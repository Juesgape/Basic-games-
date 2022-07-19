window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const erase = document.querySelector('.erase-all button');
    let color = document.querySelector('.change-color input');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    function eraseDrawing(e) {
        ctx.clearRect(e.clientX, e.clientY, canvas.width, canvas.height);
    }

    function eraser() {

    }

    function changeColor() {
        ctx.strokeStyle = color.value;
    }

    //evvent listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    erase.addEventListener('click', eraseDrawing);
    color.addEventListener('input', changeColor);

});