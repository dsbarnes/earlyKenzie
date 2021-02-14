const express = require('express');
const router = express.Router();

const blogData = {
    title: 'blogTitle',
    date: '8/27/1988',
    section1: 'This is a section',
    textArea1: 'text',
    subSection1: 'This is a sub section',
    textArea2: 'This is another text area'
  }

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('blog', {
    rout: 'blog'
  })
})
router.get('/charts', function(req, res) {
  res.render('blog', {
    rout: 'charts',
    blog: blogData
  })
})
router.get('/production', function(req, res) {
  res.render('blog', {
    rout: 'production'
  })
})
router.get('/producers', function(req, res) {
  res.render('blog', {
    rout: 'producers'
  })
})
router.get('/lyrics', function(req, res) {
  res.render('blog', {
    rout: 'lyrics'
  })
})
router.get('/daw', function(req, res) {
  res.render('blog', {
    rout: 'daw'
  })
})


module.exports = router;
