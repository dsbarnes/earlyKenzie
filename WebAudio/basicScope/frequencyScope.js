const audioCtx = new(window.AudioContext || window.webkitAudioContext)();

const canvas = document.getElementById("oscilloscope");
const canvasCtx = canvas.getContext("2d");
const WIDTH = canvas.width
const HEIGHT = canvas.height

//The point of all this is the analyzer.
const analyser = audioCtx.createAnalyser();
//Create the Oscillators
const oscOne = new OscillatorNode(audioCtx, {
    type: 'triangle',
    frequency: 880,
    detune: 0
})
const oscTwo = new OscillatorNode(audioCtx, {
    type: 'sawtooth',
    frequency: 3330,
    detune: 0
})
//Create the 5 band EQ:
const lowShelf = new BiquadFilterNode(
    audioCtx,
    {
        type: 'lowshelf',
        frequency: 80,
        detune: 0,
        gain: 0
    })
const lowBand = new BiquadFilterNode(
    audioCtx,
    {
        type: 'peaking',
        frequency:240,
        detune: 0,
        gain: 0,
        Q: '1',
    })
const midBand = new BiquadFilterNode(
    audioCtx,
    {
        type: 'peaking',
        frequency: 750,
        detune: 0,
        gain: 0,
        Q: '1'
    })
const highBand = new BiquadFilterNode(
    audioCtx,
    {
        type: 'peaking',
        frequency: 2200,
        detune: 0,
        gain: 0,
        Q: '1'
    })
const highShelf = new BiquadFilterNode(
    audioCtx,
    {
        type: 'highshelf',
        frequency: 6600,
        detune: 0,
        gain: 0,
    })
const fiveBandEQ = 
    lowShelf
    .connect(lowBand)
    .connect(midBand)
    .connect(highBand)
    .connect(highShelf)

//Connect the detune slider to the oscillator
const slider = document.querySelector('.slider')
slider.addEventListener('input', () => {
    oscOne.detune.value = slider.value
})
//Connect all the sliders to the EQ
const bands = document.querySelectorAll('.band')
bands.forEach(band => {
    band.addEventListener('input', () => {
        switch(band.name){
            case 'lowShelf':
                lowShelf.gain.value = band.value
                break
            case 'lowBand':
                lowBand.gain.value = band.value
                break
            case 'midBand':
                midBand.gain.value = band.value
                break
            case 'highBand':
                highBand.gain.value = band.value
                break
            case 'highShelf':
                highShelf.gain.value = band.value
                break
            default:
                return void 0
        }
    })
})
//Button starts the oscillators
document.querySelector('button')
.addEventListener('click', () => {
    if(audioCtx.state === 'suspended') 
        audioCtx.resume()

    oscOne.start()
    oscTwo.start()
})
//Signal chain
oscOne.connect(lowShelf)
oscTwo.connect(lowShelf)
fiveBandEQ.connect(analyser)

//Setup to draw the analizer
analyser.fftSize = 512; //So we don't have a zillion bars
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

function draw() {
    drawVisual = requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    //Bascic Setup again
    canvasCtx.fillStyle = 'rgb(255, 255, 255)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    var barWidth = (WIDTH / bufferLength)
    var barHeight;
    var x = 0;

    for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 0.825;
        canvasCtx.fillStyle = 
            `rgb(${255-barHeight}, 170, 99)`
        canvasCtx.fillRect(
            x,
            HEIGHT - barHeight,
            barWidth,
            barHeight
        )
        x += barWidth + 1;
    }
};
draw();