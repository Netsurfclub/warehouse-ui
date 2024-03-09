interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  image: string;
  pages: Page[];
}

interface PageProps {
  pageName: string;
}

interface ErrorPageProps {
  mainPagePath: string;
}
