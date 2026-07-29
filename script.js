let video = document.getElementById('video');
let canvas = document.createElement('canvas');

document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

const startStream = () => {
    navigator.mediaDevices.getUserMedia ({
        video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 }
        },
        audio: false 
    }).then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
        };
    });

}

startStream();

var arahan = document.createElement('div');
arahan.id = "sign_instructions";
arahan.style.verticalAlign = "middle";
arahan.textContent = "Please look at the camera";

video.parentNode.insertBefore(arahan, video.nextSibling);


const blinkDetection = document.createElement('div');
blinkDetection.id = "kedipan_mata";
blinkDetection.style.verticalAlign = "middle";
blinkDetection.textContent = "Please blink your eyes";
arahan.appendChild(blinkDetection);
