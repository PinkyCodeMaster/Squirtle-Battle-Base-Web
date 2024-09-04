export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  seller: string; // Username of the seller
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  inStock?: boolean;
}

// List of product data
const productData: Product[] = [
  {
    id: 1,
    name: "Tactical Vest XL-2000",
    price: 129.99,
    description: "High-quality tactical vest for all your gear",
    category: "Tactical Gear",
    image: "https://utfs.io/f/86fde4e0-bd29-4013-ae13-0b7913e53e51-8tlbnx.jpg",
    seller: "JohnDoe", // Linked to user by username
    rating: 4.5,
    reviewsCount: 12,
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Night Vision Goggles",
    price: 599.99,
    description: "Perfect for night operations and airsoft games.",
    category: "Attachments",
    image: "https://utfs.io/f/d3f18d59-7e79-4371-b066-f2f366b1e6ad-wi2plm.jpg",
    seller: "JohnDoe",
    rating: 4.8,
    reviewsCount: 8,
    featured: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Combat Boots Pro",
    price: 149.99,
    description: "Durable and comfortable boots for long missions.",
    category: "Clothing",
    image: "https://utfs.io/f/5d7b2b7e-bc4d-4c6c-bbcc-70f7b3f32f1b.jpg",
    seller: "JaneSmith",
    rating: 4.2,
    reviewsCount: 5,
    featured: false,
    inStock: true,
  },
  // Add more products here
];

// Function to get all products
export function getAllProducts(): Product[] {
  return productData;
}

// Function to get a product by its ID
export function getProductById(id: number): Product | undefined {
  return productData.find((product) => product.id === id);
}

// Function to get products by seller's username
export function getProductsBySeller(seller: string): Product[] {
  return productData.filter((product) => product.seller === seller);
}
