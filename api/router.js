const express = require('express');
const router = express.Router();

router.use(express.json());

const{
    get,
    insert,
} = require('./model');

router.get('/', (req, res) =>{
    get().then(a => res.send(a));
});

router.post('/', (req,res) => {
    insert(req.body).then(a => res.send(a)).catch( err => res.send(err));
})

module.exports = router;