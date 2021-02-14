import greatBeats from '../javascripts/videoLinks/beats/testing.js'

const videoContainer = document.getElementById('videoGridContainer')

const iframe = document.querySelector('iframe')

const videoListTitlesArray = 
    Array.from(document.querySelectorAll('.videoTitle'))

console.log(videoListTitlesArray)

videoListTitlesArray.forEach(title => {
    title.addEventListener('click', function(evt){
        
        const indexOfLink = Number(evt.target.dataset.index)
        const parentElement = evt.target.parentElement.parentElement

        parentElement.id === 'beginner' ?
        iframe.src = greatBeats[indexOfLink] :
        console.log('Advanced !!')
    })
})