const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('First')
    res.send(`<form action="/admin/product" method="GET" >  <input type="text" name="productTitle" placeholder="Add product"> 
        <button type="submit" > Add Product </button>
    </form>`)
 });

 // /admin/add-product => POST
 router.post('/add-product', (req, res, next) => {
    console.log('First')
    res.send(`<form action="/admin/product" method="GET" >  <input type="text" name="productTitle" placeholder="Add product"> 
        <button type="submit" > Add Product </button>
    </form>`)
 });

router.get('/product', (req, res) => {
    console.log('req', req.body)
    res.redirect('/')
});



module.exports = router;