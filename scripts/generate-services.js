const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const services = [
    { id: '2d-3d-design', name: '2D & 3D Design Plan' },
    { id: 'false-ceiling', name: 'False Ceiling' },
    { id: 'living-area', name: 'Living Area' },
    { id: 'tv-unit', name: 'TV Unit' },
    { id: 'modular-kitchen', name: 'Modular Kitchen' },
    { id: 'crockery-unit', name: 'Crockery Unit' },
    { id: 'pooja-room', name: 'Pooja Room' },
    { id: 'bedroom-wardrobes', name: 'Bedroom Wardrobes' },
    { id: 'hydraulic-beds', name: 'Hydraulic Beds' },
    { id: 'dressing-area', name: 'Dressing Area' },
    { id: 'vanity-area', name: 'Vanity Area' },
    { id: 'lightning-design', name: 'Lightning Design' },
    { id: 'glass-work', name: 'Glass Work' },
    { id: 'staircase-design', name: 'Staircase Design' },
    { id: 'wall-painting', name: 'Wall Painting' },
    { id: 'customized-interiors', name: 'Customized Interior Designs' }
];

// Read template
const template = fs.readFileSync(
    path.join(__dirname, '..', 'templates', 'service-template.html'),
    'utf8'
);

// Add sample image URLs for each service
const serviceImageUrls = {
    '2d-3d-design': [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
        'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg'
    ],
    'false-ceiling': [
        'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg'
    ],
    'living-area': [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
        'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg',
        'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg'
    ]
    // Add more image URLs for other services
};

async function downloadImage(url, filepath) {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFileSync(filepath, buffer);
        console.log(`Downloaded: ${filepath}`);
    } catch (err) {
        console.error(`Error downloading ${url}: ${err.message}`);
    }
}

async function generateServices() {
    // Create services directory if it doesn't exist
    const servicesDir = path.join(__dirname, '..', 'services');
    if (!fs.existsSync(servicesDir)) {
        fs.mkdirSync(servicesDir);
    }

    // Generate service pages and download images
    for (const service of services) {
        // Create service page
        const content = template
            .replace(/{{SERVICE_NAME}}/g, service.name)
            .replace(/{{SERVICE_ID}}/g, service.id);
        
        fs.writeFileSync(
            path.join(servicesDir, `${service.id}.html`),
            content
        );
        
        // Create image directory and download images
        const imageDir = path.join(servicesDir, 'images', service.id);
        if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir, { recursive: true });
        }

        // Download sample images
        const urls = serviceImageUrls[service.id] || [];
        for (let i = 0; i < urls.length; i++) {
            const filepath = path.join(imageDir, `sample${i + 1}.jpg`);
            await downloadImage(urls[i], filepath);
        }
    }

    console.log('Service pages and sample images generated successfully!');
}

// Run the generator
generateServices().catch(console.error);