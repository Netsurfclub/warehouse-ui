// Image types

declare module "*.png";
declare module "*.jpg";

// Common FC Props types

interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  image: string;
  pages: Page[];
}

// Page FC Props types

interface PageProps {
  pageName: string;
}

// Collection types

interface Pages {
  MAIN_PAGE: Page;
  PAGE_1: Page;
  PAGE_2: Page;
  ERROR_PAGE: Page;
}

// Custom data model types

// Other custom types

interface Page {
  name: string;
  path: string;
}
