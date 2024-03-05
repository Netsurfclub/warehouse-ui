import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import MainPage from "./pages/MainPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import pages from "../constants/page.constants";

import "../index.css";

const App: React.FC<AppProps> = ({ applicationName }) => {
  const { MAIN_PAGE, PAGE_1, PAGE_2 } = pages;

  return (
    <BrowserRouter>
      <Navbar
        title={applicationName}
        homeRoute={MAIN_PAGE.path}
        routes={[
          { name: PAGE_1.name, path: PAGE_1.path },
          { name: PAGE_2.name, path: PAGE_2.path },
        ]}
      />
      <main className="container">
        <Routes>
          <Route
            path={MAIN_PAGE.path}
            element={<MainPage pageName={MAIN_PAGE.name} />}
          />
          <Route
            path={PAGE_1.path}
            element={<Page1 pageName={PAGE_1.name} />}
          />
          <Route
            path={PAGE_2.path}
            element={<Page2 pageName={PAGE_2.name} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
