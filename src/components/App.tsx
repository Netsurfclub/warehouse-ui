import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./common/Navbar";

const App: React.FC<AppProps> = ({ applicationName }) => {
  return (
    <BrowserRouter>
      <Navbar title={applicationName} homeRoute="/" routes={[]} />
      <main className="container">{/* TODO: Routing between page.*/}</main>
    </BrowserRouter>
  );
};

export default App;
