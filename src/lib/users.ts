import { Product, getProductById } from "./product";

export interface User {
  id: number;
  username: string;
  callsign: string;
  address: string;
  productsForSale: Product[]; // List of products the user has for sale
}

// Define a list of users with products linked via product IDs
const userData: User[] = [
  {
    id: 1,
    username: "JohnDoe",
    callsign: "TacticalMaster",
    address: "123 Military Base St, Battle Town, USA",
    productsForSale: [getProductById(1), getProductById(2)].filter(
      Boolean
    ) as Product[], // Products for JohnDoe
  },
  {
    id: 2,
    username: "JaneSmith",
    callsign: "NightOwl",
    address: "456 Tactical Lane, Ops City, USA",
    productsForSale: [getProductById(3)].filter(Boolean) as Product[], // Products for JaneSmith
  },
  {
    id: 3,
    username: "MikeRanger",
    callsign: "EagleEye",
    address: "789 Recon Rd, Sniper Village, USA",
    productsForSale: [getProductById(4), getProductById(5)].filter(
      Boolean
    ) as Product[], // Products for MikeRanger
  },
  {
    id: 4,
    username: "LucyTact",
    callsign: "ShadowFox",
    address: "101 Foxhole Ave, Covert Town, USA",
    productsForSale: [getProductById(6)].filter(Boolean) as Product[], // Products for LucyTact
  },
  {
    id: 5,
    username: "SamSnipes",
    callsign: "Viper",
    address: "202 Crosshair St, Marksman City, USA",
    productsForSale: [getProductById(7), getProductById(8)].filter(
      Boolean
    ) as Product[], // Products for SamSnipes
  },
  {
    id: 6,
    username: "DianaFrost",
    callsign: "IceQueen",
    address: "303 Glacier Blvd, Arctic Base, USA",
    productsForSale: [getProductById(9)].filter(Boolean) as Product[], // Products for DianaFrost
  },
  {
    id: 7,
    username: "CharlieBravo",
    callsign: "IronClad",
    address: "404 Armor Rd, Shield Fortress, USA",
    productsForSale: [getProductById(10), getProductById(11)].filter(
      Boolean
    ) as Product[], // Products for CharlieBravo
  },
];

// Function to get all users
export function getAllUsers(): User[] {
  return userData;
}

// Function to get a user by their ID
export function getUserById(id: number): User | undefined {
  return userData.find((user) => user.id === id); // Corrected: userData instead of users
}

// Function to get a user by their username
export function getUserByUsername(username: string): User | undefined {
  return userData.find((user) => user.username === username);
}
