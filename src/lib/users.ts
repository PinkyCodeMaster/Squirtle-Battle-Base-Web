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
  // Add more users here
];

// Function to get all users
export function getAllUsers(): User[] {
  return userData;
}

// Function to get a user by their ID
export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}
// Function to get a user by their username
export function getUserByUsername(username: string): User | undefined {
  return userData.find((user) => user.username === username);
}
