interface AppProps {
  applicationName: string;
}

interface Route {
  name: string;
  path: string;
}

interface NavbarProps {
  title: string;
  homeRoute: string;
  routes: Route[];
}
