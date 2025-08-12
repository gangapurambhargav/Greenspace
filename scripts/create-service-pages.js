const fs = require('fs');
const path = require('path');

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

const template = (serviceName) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serviceName} - GreenSpace Interior</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <nav class="nav">
            <div class="brand">GreenSpace Interior</div>
            <div>
                <a href="../index.html">Home</a>
                <a href="../index.html#portfolio">Portfolio</a>
                <a href="../index.html#services">Services</a>
                <a href="../index.html#about">About Us</a>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="inner">
            <h1>GreenSpace Interior</h1>
            <p class="tag">Designing spaces that breathe</p>
            <h2>${serviceName}</h2>
        </div>
    </section>

    <main>
        <section class="container">
            <div class="slider" id="slider">
                <div class="slides" id="slides">
                    <!-- Slides will be populated via JavaScript -->
                </div>
                <div class="controls">
                    <button aria-label="Previous" id="prevBtn">‹</button>
                    <button aria-label="Next" id="nextBtn">›</button>
                </div>
            </div>
        </section>
    </main>

    <script src="../js/services.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            initServicePage('${serviceName.toLowerCase().replace(/ /g, '-')}');
        });
    </script>
</body>
</html>
`;

// Create services directory if it doesn't exist
const servicesDir = path.join(__dirname, '..', 'services');
if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir);
}

// Generate service pages
services.forEach(service => {
    const fileName = path.join(servicesDir, `${service}.html`);
    const content = template(service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '));
    
    fs.writeFileSync(fileName, content);
    console.log(`Created ${fileName}`);
});