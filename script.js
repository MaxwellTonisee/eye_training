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


