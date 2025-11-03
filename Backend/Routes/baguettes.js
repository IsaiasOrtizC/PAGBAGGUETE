const express = require('express');
const router = express.Router();
const Baguette = require('../Models/Baguette'); 


router.get('/', async (req, res) => {
    try {
        const baguettes = await Baguette.find();
        res.json(baguettes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const nuevoBaguette = new Baguette(req.body);
        const baguetteGuardado = await nuevoBaguette.save();
        res.status(201).json(baguetteGuardado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
