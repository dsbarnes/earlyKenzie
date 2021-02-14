const express = require('express')
const router = express.Router({strict: true});

const videoList = {
  beginner: {
    beats: ['beats', 'beats', 'beats'],
    drums: ['drums', 'drums', 'drums'],
    bass: ['bass', 'bass', 'bass'],
    keys: ['keys', 'keys', 'keys'],
    synth: ['synth', 'synth', 'synth'],
    daw: ['daw', 'daw', 'daw'],
    theory: ['theory', 'theory', 'theory']
  },
  advanced: {
    beats: ['beats', 'beats', 'beats'],
    drums: ['drums', 'drums', 'drums'],
    bass: ['bass', 'bass', 'bass'],
    keys: ['keys', 'keys', 'keys'],
    synth: ['synth', 'synth', 'synth'],
    daw: ['daw', 'daw', 'daw'],
    theory: ['theory', 'theory', 'theory']
  }
}

router.get('/', function(req, res, next) {
  res.render('index', { 
    rout: 'index',
    routsOne: ['/blog', '/drums', '/keys', '/daw'],
    routsTwo: ['/beats', '/bass', '/synth', '/theory']
  })
})

router.get('/beats', function(req, res){
  res.render('index', {
    rout: 'beats',
    beginner: videoList.beginner.beats,
    advanced: videoList.advanced.beats
  })
})
router.get('/drums', function(req, res){
  res.render('index', {
    rout: 'drums',
    beginner: videoList.beginner.drums,
    advanced: videoList.advanced.drums
  })
})
router.get('/bass', function(req, res){
  res.render('index', {
    rout: 'bass',
    beginner: videoList.beginner.bass,
    advanced: videoList.advanced.bass
  })
})
router.get('/keys', function(req, res){
  res.render('index', {
    rout: 'keys',
    beginner: videoList.beginner.keys,
    advanced: videoList.advanced.keys
  })
})
router.get('/synth', function(req, res){
  res.render('index', {
    rout: 'synth',
    beginner: videoList.beginner.synth,
    advanced: videoList.advanced.synth
  })
})
router.get('/daw', function(req, res){
  res.render('index', {
    rout: 'daw',
    beginner: videoList.beginner.daw,
    advanced: videoList.advanced.daw
  })
})
router.get('/theory', function(req, res){
  res.render('index', {
    rout: 'theory',
    beginner: videoList.beginner.theory,
    advanced: videoList.advanced.theory
  })
})

module.exports = router;