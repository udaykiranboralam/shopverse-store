export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 1999,
    description: "High-fidelity sound with active noise cancellation. 30-hour battery life, comfortable over-ear design.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    price: 4999,
    description: "Elegant timepiece with genuine leather strap. Water-resistant, Japanese quartz movement.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 799,
    description: "100% organic cotton, soft and breathable. Available in multiple colors.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Smart Fitness Tracker",
    price: 3999,
    description: "Track your health with heart rate, sleep, and activity monitoring. 7-day battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Set",
    price: 1199,
    description: "Handcrafted ceramic dripper with double-wall carafe. Brew the perfect cup every time.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: "6",
    name: "Canvas Messenger Bag",
    price: 1499,
    description: "Durable waxed canvas with leather accents. Padded laptop compartment fits up to 15 inches.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.4,
  },
  {
    id: "7",
    name: "Bamboo Desk Organizer",
    price: 899,
    description: "Eco-friendly bamboo organizer with multiple compartments. Keeps your workspace tidy.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
    rating: 4.3,
  },
  {
    id: "8",
    name: "Running Sneakers",
    price: 2999,
    description: "Lightweight and responsive cushioning. Breathable mesh upper for maximum comfort.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: "9",
    name: "Portable Bluetooth Speaker",
    price: 1499,
    description: "360-degree sound with deep bass. IPX7 waterproof, 12-hour playtime.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.6,
  },
];

export const categories = ["All", "Electronics", "Clothing", "Accessories", "Home"];
