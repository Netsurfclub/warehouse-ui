interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  title: string;
  homeRoute: string;
  routes: Page[];
}

interface PageProps {
  pageName: string;
}
