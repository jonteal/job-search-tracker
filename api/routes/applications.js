const router = require('express').Router();
const User = require('../models/User');
const Application = require('../models/Application');

// CREATE APPLICATION
router.post('/', async (req, res) => {
    const newApplication = new Application(req.body);
    try {
        const savedApplication = await newApplication.save();
        res.status(200).json(savedApplication);
    } catch (err) {
        res.status(500).json(err);
    }
});