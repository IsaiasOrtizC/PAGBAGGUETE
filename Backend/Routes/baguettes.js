const express = require('express');
const router = express.Router();
const Baguette = require('../Models/Baguette'); // Importa el modelo

// GET -> obtener todos los baguettes
router.get('/', async (req, res) => {
    try {
        const baguettes = await Baguette.find();
        res.json(baguettes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST -> crear baguette
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
