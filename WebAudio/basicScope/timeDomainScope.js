const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
const canvas = document.getElementById("oscilloscope");
const canvasCtx = canvas.getContext("2d")

const analyser = audioCtx.createAnalyser()
const gainNode = new GainNode(audioCtx, {
    gain: 0.01
})
console.log(gainNode)
const osc = new OscillatorNode(audioCtx, {
    type: 'sine',
    frequency: 250
})
osc.start()

// const volumeSlider = document.querySelector('#volume')
// volumeSlider.addEventListener('input', () => {
//     gainNode.gain.value = volumeSlider.value
// })

gainNode.connect(analyser)

const ADSR = (node) => {
    const attackTime = 3
    const decayTime = 3
    // const sustainTime = 2 // basically it's a set timeout, i think??
    const releaseTime = 3
    const disconnectTime = 
        (attackTime +
        decayTime +
        releaseTime) *
        1000

    node.gain.linearRampToValueAtTime(1.5, attackTime)
    .linearRampToValueAtTime(1, decayTime + attackTime)
    .linearRampToValueAtTime(0.01, releaseTime + attackTime + decayTime)

    // setTimeout(()=>{
    //     osc.disconnect(gainNode)
    // }, disconnectTime)
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    if(audioCtx.state === 'suspended') audioCtx.resume()
    osc.connect(gainNode)
    ADSR(gainNode)
})

//The docs use this:
// const bufferLength = analyser.frequencyBinCount; //it's 1024 by default
//But for good DSP is shoul be this:
const bufferLength = analyser.fftSize
let dataArray = new Uint8Array(bufferLength);
// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData
analyser.getByteTimeDomainData(dataArray);

// gainNode.connect(audioCtx.destination)

function draw() {
    //Recursivly draw the shit out of the sound input.
    requestAnimationFrame(draw);
    
    analyser.getByteTimeDomainData(dataArray);
    //Basic canvas setup so we see anything at all
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 2; //For whatever reason 2 is the min reasonable number
    canvasCtx.strokeStyle = "rgb(255, 255, 255)";
    canvasCtx.beginPath();

    let sliceWidth = canvas.width * 1.0 / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        let canvasHeightPercentage = dataArray[i] / 255.0;
        let y = canvasHeightPercentage * canvas.height;
        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }
    x += sliceWidth;
    }
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
}
draw();
