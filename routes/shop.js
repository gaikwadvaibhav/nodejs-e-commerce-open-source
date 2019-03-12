const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('req-->', req.body)
    // res.send(' <h2> Homepage </h2> ')
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;