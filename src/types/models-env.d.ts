interface Product {
  id: number;
  name: string;
  supplierName: string;
  description: string;
  price: double;
  photo: string | null;
}

interface Inventory {
  product: Product;
  pieces: number;
  unit: string;
}
