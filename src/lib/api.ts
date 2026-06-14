export interface Pizza {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Drink {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Order {
  id: number;
  customerId: number;
  date: string;
  status: string;
  total: string;
}

export async function fetchPizzas(): Promise<Pizza[]> {
  const res = await fetch("http://localhost:5000/api/Pizzas");
  return res.json();
}

export async function fetchDrinks(): Promise<Drink[]> {
  const res = await fetch("http://localhost:5000/api/Drinks");
  return res.json();
}

export async function fetchOrders(): Promise<Order[]> {
  const res = await fetch("http://localhost:5000/api/Orders");
  return res.json();
}
