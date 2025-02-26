const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Dice Roller API
app.get('/roll/:sides', (req, res) => {
    const sides = parseInt(req.params.sides);
    if (!sides || sides < 2) {
        return res.status(400).json({ error: 'Invalid number of sides' });
    }
    const roll = Math.floor(Math.random() * sides) + 1;
    res.json({ sides, roll });
});

// Wake up endpoint
app.get('/wake-up', (req, res) => {
    res.json({ message: 'Server is awake' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Dice Roller API running on port ${PORT}`);
});
