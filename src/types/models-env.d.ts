interface Product {
  name: string;
  price: double;
  description: string;
  photo: string | null;
}

interface Inventory {
  product: Product;
  pieces: number;
  unit: string;
}