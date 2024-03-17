import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import App from "./components/App";

import { APPLICATION_NAME } from "./constants/app.constants";

import "./index.css";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App applicationName={APPLICATION_NAME} />
    </ApolloProvider>
  </React.StrictMode>,
);
