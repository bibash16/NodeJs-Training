const path = require('path');

const express = require('express');

const router = express.Router();

// /admid/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // res, sending responses
});

// /admin/add-products => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;