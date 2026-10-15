// src/mock/asyncMock.js
const products = [
  { id: '1', name: 'iPhone 15 Pro', price: 9000000, category: 'celulares', img: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg', description: 'Pantalla Super Retina XDR, Chip A17 Pro.' },
  { id: '2', name: 'MacBook Air M3', price: 11000000, category: 'laptops', img: 'https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg', description: 'Chip M3 de Apple, 8GB de RAM, 256GB SSD.' },
  { id: '3', name: 'iPad Air', price: 5000000, category: 'tablets', img: 'https://www.apple.com/v/ipad-air/ah/images/overview/closer-look/all-colors/slide_1A__u8zw91uc6iaq_large.jpg', description: 'Pantalla Liquid Retina de 10.9 pulgadas.' },
  { id: '4', name: 'Samsung Galaxy S24', price: 4500000, category: 'celulares', img: 'https://images.samsung.com/es/smartphones/galaxy-s24/images/galaxy-s24-highlights-kv.jpg?imbypass=true', description: 'Cámara de 50MP, Inteligencia Artificial integrada.' }
];

// Obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

// Obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 500);
  });
};

// Obtener un solo producto por ID
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};
