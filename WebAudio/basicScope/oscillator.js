const button = document.querySelector('button')
const context = new AudioContext()

const oscillator = new OscillatorNode(context, {
    type: 'sine'
})
oscillator.start()

const gain = new GainNode(context, {
    gain: -0.5
})

const volumeControl = document.querySelector('#volume')
volumeControl.addEventListener('input', () => {
    gain.gain.value = volumeControl.value
})

oscillator.connect(gain)
button.addEventListener('click', () => {
    if(button.dataset.playing === "false"){
        button.dataset.playing = 'true'
        gain.connect(context.destination)
    }
    else{
        button.dataset.playing = 'false'
        gain.disconnect(context.destination)
    }
})