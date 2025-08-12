const serviceData = {
  '2d-3d-design': {
    title: '2D & 3D Design Plan',
    description: 'Professional 2D and 3D interior design planning services',
    images: [
      'images/2d-3d/slide1.jpg',
      'images/2d-3d/slide2.jpg',
      'images/2d-3d/slide3.jpg'
    ]
  },
  'false-ceiling': {
    title: 'False Ceiling',
    description: 'Modern false ceiling designs for your space',
    images: [
      'images/ceiling/slide1.jpg',
      'images/ceiling/slide2.jpg',
      'images/ceiling/slide3.jpg'
    ]
  }
  // Add similar objects for each service
};

function initServicePage(serviceId) {
  const service = serviceData[serviceId];
  if (!service) return;

  // Update page title and heading
  document.title = `${service.title} - GreenSpace Interior`;
  document.querySelector('.section-title').textContent = service.title;

  // Populate slides
  const slides = document.getElementById('slides');
  service.images.forEach(img => {
    const figure = document.createElement('figure');
    figure.className = 'slide';
    figure.innerHTML = `
      <img src="${img}" alt="${service.title}">
      <figcaption>${service.description}</figcaption>
    `;
    slides.appendChild(figure);
  });

  // Initialize slider
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