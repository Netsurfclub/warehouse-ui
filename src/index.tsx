import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { applicationName } from "./constants/appConstants";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <App applicationName={applicationName} />
  </StrictMode>,
);
