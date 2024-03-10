// Image types
declare module "*.png";
declare module "*.jpg";

// Common FC Props types
interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  contents: KeyValuePair<string, string>[];
}

interface NavbarProps {
  image: string;
  pages: Page[];
}

// Custom FC Props types
interface AppProps {
  applicationName: string;
}

interface ProductCardProps {
  product: Product;
}

// Page FC Props types

interface PageProps {
  pageName: string;
}

// Custom data model types
interface Product {
  id: number;
  name: string;
  supplierName: string;
  price: double;
  unit: string;
  photo: string | null;
  onStock: number;
}

// Other custom types
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
