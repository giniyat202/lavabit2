var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.render('home', { id: req.params.id });
});

module.exports = router;