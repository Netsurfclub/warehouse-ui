interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  title: string;
  mainPagePath: string;
  pages: Page[];
}

interface PageProps {
  pageName: string;
}

interface ErrorPageProps {
  mainPagePath: string;
}
