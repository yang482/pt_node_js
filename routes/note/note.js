var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:hidParam(*)', function(req, res, next) {
    console.log('get param : ');
    console.log(req.params);
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log('post param : ');
    console.log(req.body);

    res.redirect('/notes/' + req.body.hidParam);
});

module.exports = router;
