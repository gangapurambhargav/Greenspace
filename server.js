const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Static file middleware
app.use(express.static(path.join(__dirname)));
app.use('/services', express.static(path.join(__dirname, 'services')));

// Service routes
const services = [
    '2d-3d-design',
    'false-ceiling',
    'living-area',
    'tv-unit',
    'modular-kitchen',
    'crockery-unit',
    'pooja-room',
    'bedroom-wardrobes',
    'hydraulic-beds',
    'dressing-area',
    'vanity-area',
    'lightning-design',
    'glass-work',
    'staircase-design',
    'wall-painting',
    'customized-interior-designs'
];

// Add routes for each service
services.forEach(service => {
    app.get(`/services/${service}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'services', `${service}.html`));
    });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Handle 404s
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});