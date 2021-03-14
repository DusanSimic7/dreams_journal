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

// Getting One Dream
router.get('/:id', async (req, res) => {
    let single_dream;

    try{
        single_dream = await Dreams.findById(req.params.id)
        if(single_dream == null ){
            return res.status(404).json( {message: 'Cannot find subscriber'})
        }
        res.send(single_dream)

    }catch (err){
        return res.status(500).json( { message: err.message })
    }

})

// Update Dream
router.put('/:id', async (req, res) => {

    try{
        let single_dream;

        single_dream = await Dreams.findById(req.params.id)
        console.log(single_dream)
        if(single_dream === null ){
            return res.status(404).json( {message: 'Cannot find dream'})
        }
        if(req.body.title !== null) {
            single_dream.title = req.body.title
        }
        if(req.body.description !== null){
            single_dream.description = req.body.description
        }
        if(req.body.type !== null){
            single_dream.type = req.body.type
        }
        const updatedDream = await single_dream.save()

        res.send(updatedDream)

    }catch (err){
        return res.status(500).json( { message: err.message })
    }

});

// Delete  Dream
router.delete('/:id', async (req, res) => {
    try{
        let single_dream;
        single_dream = await Dreams.findById(req.params.id)

        await single_dream.remove();
        res.json( { message: 'Dream deleted' })
    }catch (err){
        res.status(500).json( { message: err.message })
    }

});


module.exports = router;