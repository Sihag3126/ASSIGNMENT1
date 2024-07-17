var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Abhishek Sihag - Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Abhishek Sihag - About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Abhishek Sihag - Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Abhishek Sihag - Contact Me' });
});

module.exports = router;
