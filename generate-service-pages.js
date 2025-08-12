const fs = require('fs');
const path = require('path');

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

const template = fs.readFileSync('service-template.html', 'utf8');

services.forEach(service => {
  let content = template
    .replace(/SERVICE_NAME/g, service.name)
    .replace('initServicePage()', `initServicePage('${service.id}')`);
  
  fs.writeFileSync(
    path.join('services', `${service.id}.html`), 
    content
  );
});

// Create image directories
services.forEach(service => {
  fs.mkdirSync(path.join('services/images', service.id), { recursive: true });
});