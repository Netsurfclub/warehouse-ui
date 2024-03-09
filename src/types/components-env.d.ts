interface AppProps {
  applicationName: string;
}

interface NavbarProps {
  image: string;
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
