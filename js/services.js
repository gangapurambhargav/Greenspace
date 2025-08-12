const serviceImages = {
    '2d-3d-design': {
        title: '2D & 3D Design Plan',
        images: [
            'https://images.unsplash.com/photo-1545454675-3531b543be5d',
            'https://images.unsplash.com/photo-1545454675-3531b543be5e',
            'https://images.unsplash.com/photo-1545454675-3531b543be5f'
        ]
    },
    'false-ceiling': {
        title: 'False Ceiling',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687940-ce8a6c25118d',
            'https://images.unsplash.com/photo-1600607687941-ce8a6c25118e'
        ]
    },
    'living-area': {
        title: 'Living Area',
        images: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600566753191-17f0baa2a6c4',
            'https://images.unsplash.com/photo-1600566753192-17f0baa2a6c5'
        ]
    },
    'tv-unit': {
        title: 'TV Unit',
        images: [
            'https://images.unsplash.com/photo-1600566753193-17f0baa2a6c6',
            'https://images.unsplash.com/photo-1600566753194-17f0baa2a6c7',
            'https://images.unsplash.com/photo-1600566753195-17f0baa2a6c8'
        ]
    },
    'modular-kitchen': {
        title: 'Modular Kitchen',
        images: [
            'https://images.unsplash.com/photo-1600566753196-17f0baa2a6c9',
            'https://images.unsplash.com/photo-1600566753197-17f0baa2a6c0',
            'https://images.unsplash.com/photo-1600566753198-17f0baa2a6c1'
        ]
    },
    'crockery-unit': {
        title: 'Crockery Unit',
        images: [
            'https://images.unsplash.com/photo-1600566753199-17f0baa2a6c2',
            'https://images.unsplash.com/photo-1600566753200-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600566753201-17f0baa2a6c4'
        ]
    },
    'pooja-room': {
        title: 'Pooja Room',
        images: [
            'https://images.unsplash.com/photo-1600566753202-17f0baa2a6c5',
            'https://images.unsplash.com/photo-1600566753203-17f0baa2a6c6',
            'https://images.unsplash.com/photo-1600566753204-17f0baa2a6c7'
        ]
    },
    'bedroom-wardrobes': {
        title: 'Bedroom Wardrobes',
        images: [
            'https://images.unsplash.com/photo-1600566753205-17f0baa2a6c8',
            'https://images.unsplash.com/photo-1600566753206-17f0baa2a6c9',
            'https://images.unsplash.com/photo-1600566753207-17f0baa2a6c0'
        ]
    },
    'hydraulic-beds': {
        title: 'Hydraulic Beds',
        images: [
            'https://images.unsplash.com/photo-1600566753208-17f0baa2a6c1',
            'https://images.unsplash.com/photo-1600566753209-17f0baa2a6c2',
            'https://images.unsplash.com/photo-1600566753210-17f0baa2a6c3'
        ]
    },
    'dressing-area': {
        title: 'Dressing Area',
        images: [
            'https://images.unsplash.com/photo-1600566753211-17f0baa2a6c4',
            'https://images.unsplash.com/photo-1600566753212-17f0baa2a6c5',
            'https://images.unsplash.com/photo-1600566753213-17f0baa2a6c6'
        ]
    },
    'vanity-area': {
        title: 'Vanity Area',
        images: [
            'https://images.unsplash.com/photo-1600566753214-17f0baa2a6c7',
            'https://images.unsplash.com/photo-1600566753215-17f0baa2a6c8',
            'https://images.unsplash.com/photo-1600566753216-17f0baa2a6c9'
        ]
    },
    'lightning-design': {
        title: 'Lightning Design',
        images: [
            'https://images.unsplash.com/photo-1600566753217-17f0baa2a6c0',
            'https://images.unsplash.com/photo-1600566753218-17f0baa2a6c1',
            'https://images.unsplash.com/photo-1600566753219-17f0baa2a6c2'
        ]
    },
    'glass-work': {
        title: 'Glass Work',
        images: [
            'https://images.unsplash.com/photo-1600566753220-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600566753221-17f0baa2a6c4',
            'https://images.unsplash.com/photo-1600566753222-17f0baa2a6c5'
        ]
    },
    'staircase-design': {
        title: 'Staircase Design',
        images: [
            'https://images.unsplash.com/photo-1600566753223-17f0baa2a6c6',
            'https://images.unsplash.com/photo-1600566753224-17f0baa2a6c7',
            'https://images.unsplash.com/photo-1600566753225-17f0baa2a6c8'
        ]
    },
    'wall-painting': {
        title: 'Wall Painting',
        images: [
            'https://images.unsplash.com/photo-1600566753226-17f0baa2a6c9',
            'https://images.unsplash.com/photo-1600566753227-17f0baa2a6c0',
            'https://images.unsplash.com/photo-1600566753228-17f0baa2a6c1'
        ]
    },
    'customized-interior-designs': {
        title: 'Customized Interior Designs',
        images: [
            'https://images.unsplash.com/photo-1600566753229-17f0baa2a6c2',
            'https://images.unsplash.com/photo-1600566753230-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600566753231-17f0baa2a6c4'
        ]
    }
};

function initServicePage(serviceId) {
    const service = serviceImages[serviceId];
    if (!service) return;

    const slides = document.getElementById('slides');
    
    service.images.forEach(imgUrl => {
        const figure = document.createElement('figure');
        figure.className = 'slide';
        figure.innerHTML = `
            <img src="${imgUrl}" alt="${service.title}">
            <figcaption>${service.title}</figcaption>
        `;
        slides.appendChild(figure);
    });

    // Add slider functionality
    let idx = 0;
    const total = slides.children.length;
    
    function go(delta) {
        idx = (idx + delta + total) % total;
        slides.style.transform = `translateX(-${idx * 100}%)`;
    }

    document.getElementById('prevBtn').onclick = () => go(-1);
    document.getElementById('nextBtn').onclick = () => go(1);
    if(total > 1) setInterval(() => go(1), 5000);
}