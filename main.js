canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 10;
car1_height = 90;
car2_width = 10;
car2_height = 90;
background_image = "car1.png";
rover_image = "car2.jpg";
car1_x = 20;
car1_y = 20;
car2_x = 60;
car2_y = 60;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadrover;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadrover;
    car2_imgTag.src = car2_image;
}

function uploadrover() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadrover();
    }

    function up() {
        if (car2_y >= 0) {
            car2_y = car2_y - 10;
            console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
            uploadBackground();
            uploadrover();
        }
    }

    function down() {
        if (car1_y <= 500) {
            car1_y = car1_y + 10;
            console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
            uploadBackground();
            uploadrover();
        }

        function down() {
            if (car2_y <= 500) {
                car2_y = car2_y + 10;
                console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
                uploadBackground();
                uploadrover();
            }
        }

        function left() {
            if (car2_x >= 0) {
                car2_x = car2_x - 10;
                console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
                uploadBackground();
                uploadrover();
            }
        }

        function left() {
            if (car1_x >= 0) {
                car1_x = car1_x - 10;
                console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
                uploadBackground();
                uploadrover();
            }
        }

        function right() {
            if (car1_x <= 700) {
                car1_x = car1_x + 10;
                console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
                uploadBackground();
                uploadrover();
            }
        }

        function right() {
            if (car1_x <= 700) {
                car1_x = car1_x + 10;
                console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
                uploadBackground();
                uploadrover();
            }
        }

        function right() {
            if (car2_x <= 700) {
                car2_x = car2_x + 10;
                console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
                uploadBackground();
                uploadrover();
            }
        }