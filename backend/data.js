import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Hikari Marine S',
      category: 'Fish Food',
      image: '/images/Hikari-Marine-S_nbtgvq.webp',
      price: 350,
      countInStock: 20,
      brand: 'Hikari',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Red Sea Coral Pro Salt',
      category: 'Marine Salt',
      image: '/images/Red-Sea-Coral-Pro_qsxodb.jpg',
      price: 3500,
      countInStock: 0,
      brand: 'Red Sea',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Red Sea Salt',
      category: 'Marine Salt',
      image: '/images/Red-Sea-Salt_sbozdb.webp',
      price: 3500,
      countInStock: 5,
      brand: 'Red Sea',
      rating: 5.0,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
