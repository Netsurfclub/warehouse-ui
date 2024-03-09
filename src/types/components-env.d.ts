interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  title: string;
  mainPagePath: string;
  pages: Page[];
}

interface CardProps {
  title: string;
  imageSource: string;
  imageAlt: string;
  contents: KeyValuePair<string, string>[];
}

interface PageProps {
  pageName: string;
}

interface ErrorPageProps {
  mainPagePath: string;
}
