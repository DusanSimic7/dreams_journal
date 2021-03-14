const express = require('express');
const router = express.Router();
const Dreams = require('../../models/Dreams');


// Gets All Dreams
router.get('/', async (req, res) => {
    try{
        const dreams = await Dreams.find()
        res.send(dreams);

    }catch (err){
        res.status(500).json( { messag: err.message})
    }
});

// Create Dream
router.post('/', async (req, res) => {
    const dream = new Dreams({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        type: req.body.type

    })

    try{
        const newDream = await dream.save()
        res.status(201).json(newDream)
    }catch (err){
        res.status(400).json({ message: err.message})
    }
});

module.exports = router;