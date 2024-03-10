// Image types

declare module "*.png";
declare module "*.jpg";

// Common FC Props types

interface ButtonProps {
  text: string;
  url: string;
  width?: string;
  disabled?: boolean;
}

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  contents: KeyValuePair<string, string>[];
}

interface DropdownProps {
  name: string;
  value: string;
  labelText: string;
  data: any[];
  errorMessage: string;
}

interface ErrorMessageProps {
  message: string;
}

interface FileInputProps {
  name: string;
  disabled: boolean;
}

interface ListGroupProps {
  collection: any[];
}

interface ModalWindowProps {
  title: string;
  content: string;
  buttonText: string;
  routingButtonText: string;
  redirectUrl: string;
  isSuccessModal: boolean;
}

interface NavbarProps {
  image: string;
  pages: KeyValuePair<string, string>[];
}

interface NumberAddOnInputProps {
  name: string;
  value: string;
  minValue: number;
  addOnText: string;
  errorMessage: string;
}

interface NumberInputProps {
  name: string;
  value: string;
  minValue: number;
  labelText: string;
  errorMessage: string;
}

interface TableProps {
  caption: string;
  columns: any[];
  collection: any[];
}

interface TextInputProps {
  type: string;
  name: string;
  value: string;
  maxLength: number;
  labelText: string;
  errorMessage: string;
}

// Custom FC and Page FC Props types

interface AppProps {
  applicationName: string;
}

interface PageProps {
  pageName: string;
}

interface ProductCardProps {
  product: Product;
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
