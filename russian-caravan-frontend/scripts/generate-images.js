const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'hero-bg.jpg',
    width: 1920,
    height: 1080,
    text: 'Путешествуйте по России',
    bgColor: '#2C5282'
  },
  {
    name: 'about-history.jpg',
    width: 800,
    height: 600,
    text: 'История компании',
    bgColor: '#2D3748'
  },
  {
    name: 'caucasus.jpg',
    width: 800,
    height: 600,
    text: 'Кавказ',
    bgColor: '#4A5568'
  },
  {
    name: 'baikal.jpg',
    width: 800,
    height: 600,
    text: 'Байкал',
    bgColor: '#1A365D'
  },
  {
    name: 'golden-ring.jpg',
    width: 800,
    height: 600,
    text: 'Золотое кольцо',
    bgColor: '#2A4365'
  },
  {
    name: 'tours/kamchatka.jpg',
    width: 800,
    height: 600,
    text: 'Камчатка',
    bgColor: '#2C5282'
  },
  {
    name: 'tours/baikal.jpg',
    width: 800,
    height: 600,
    text: 'Байкал',
    bgColor: '#2B6CB0'
  },
  {
    name: 'tours/golden-ring.jpg',
    width: 800,
    height: 600,
    text: 'Золотое кольцо',
    bgColor: '#3182CE'
  },
  {
    name: 'team/ceo.jpg',
    width: 400,
    height: 400,
    text: 'CEO',
    bgColor: '#2D3748'
  },
  {
    name: 'team/head.jpg',
    width: 400,
    height: 400,
    text: 'Head Manager',
    bgColor: '#4A5568'
  },
  {
    name: 'team/designer.jpg',
    width: 400,
    height: 400,
    text: 'Designer',
    bgColor: '#718096'
  },
  {
    name: 'team/support.jpg',
    width: 400,
    height: 400,
    text: 'Support',
    bgColor: '#A0AEC0'
  }
];

function generateImage({ name, width, height, text, bgColor }) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${Math.floor(width / 20)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  const filePath = path.join(__dirname, '..', 'public', 'images', name);
  
  // Ensure directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated: ${name}`);
}

// Generate all images
images.forEach(generateImage); 