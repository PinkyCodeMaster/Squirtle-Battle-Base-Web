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
    description: "High-quality tactical vest for all your gear.",
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
  {
    id: 4,
    name: "Sniper Scope MK-3",
    price: 299.99,
    description: "High-precision sniper scope with night vision.",
    category: "Attachments",
    image: "https://utfs.io/f/2ec15e0a-dfb5-4b15-b46a-f2e4736d7b8c.jpg",
    seller: "MikeRanger",
    rating: 4.7,
    reviewsCount: 9,
    featured: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Ghillie Suit Elite",
    price: 189.99,
    description: "Camouflage suit designed for snipers and scouts.",
    category: "Clothing",
    image: "https://utfs.io/f/c870bdb6-4ff4-44d7-885a-3513a292e0db.jpg",
    seller: "MikeRanger",
    rating: 4.6,
    reviewsCount: 6,
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Tactical Knife KA-600",
    price: 49.99,
    description: "Multi-purpose tactical knife for field operations.",
    category: "Tools",
    image: "https://utfs.io/f/539b0b2b-56c6-4cfb-8db6-dedb2e49f848.jpg",
    seller: "LucyTact",
    rating: 4.4,
    reviewsCount: 15,
    featured: true,
    inStock: false,
  },
  {
    id: 7,
    name: "Precision Bipod",
    price: 79.99,
    description: "Adjustable bipod for stable long-range shooting.",
    category: "Attachments",
    image: "https://utfs.io/f/27b3eeb3-0fb3-448b-9e96-4d10ddbc3b97.jpg",
    seller: "SamSnipes",
    rating: 4.3,
    reviewsCount: 4,
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Rangefinder PRO",
    price: 199.99,
    description: "Advanced rangefinder for precise distance measurement.",
    category: "Tools",
    image: "https://utfs.io/f/76b23d34-76d9-4f0d-9cc8-9ec82b93adf5.jpg",
    seller: "SamSnipes",
    rating: 4.5,
    reviewsCount: 7,
    featured: true,
    inStock: true,
  },
  {
    id: 9,
    name: "Thermal Imaging Scope",
    price: 999.99,
    description: "Thermal imaging scope for extreme low-visibility operations.",
    category: "Attachments",
    image: "https://utfs.io/f/b83678c8-bbcd-4d1a-a144-c5f05f2f7683.jpg",
    seller: "DianaFrost",
    rating: 4.9,
    reviewsCount: 10,
    featured: true,
    inStock: true,
  },
  {
    id: 10,
    name: "Ballistic Helmet X-Treme",
    price: 249.99,
    description: "High-performance ballistic helmet for head protection.",
    category: "Tactical Gear",
    image: "https://utfs.io/f/5a47c4d2-4733-486b-9628-9ba3f3425348.jpg",
    seller: "CharlieBravo",
    rating: 4.6,
    reviewsCount: 11,
    featured: false,
    inStock: true,
  },
  {
    id: 11,
    name: "Armor Plate Carrier",
    price: 199.99,
    description: "Durable armor plate carrier for added protection.",
    category: "Tactical Gear",
    image: "https://utfs.io/f/d2e1a1fa-5bc1-402b-b492-429d07fc47e9.jpg",
    seller: "CharlieBravo",
    rating: 4.7,
    reviewsCount: 13,
    featured: true,
    inStock: false,
  },
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
