//Get all the HTML elements I'll need:
const audioElement = document.querySelector('audio');
const playButton = document.querySelector('button')
const volumeControl = document.querySelector('#volume')
const panControl = document.querySelector('#panner')
//Creat the audioContext
const audioContext = new AudioContext();

const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain()
const pannerNode = new StereoPannerNode(audioContext, {
    pan : 0
})

playButton.addEventListener('click', () => {
    //check if context is in a suspended state (b/c browser auto-play policy)
    if(audioContext.state === 'suspended') audioContext.resume()

    if (playButton.dataset.playing === 'false') {
        audioElement.play();
        playButton.dataset.playing = 'true';
    } else if (playButton.dataset.playing === 'true') {
        audioElement.pause();
        playButton.dataset.playing = 'false';
    }
})
//We can well our audio to play, but what happens when it ends?
//It should stop at the end of the track right?
//This takes care of that.
audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
});

volumeControl.addEventListener('input', () => {
    gainNode.gain.value = volumeControl.value
})
panControl.addEventListener('input', () => {
    pannerNode.pan.value = panControl.value
})

//Signal Chain
const someChain = gainNode.connect(pannerNode).connect(audioContext.destination)
track.connect(gainNode).connect(someChain)