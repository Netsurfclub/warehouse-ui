import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import MainPage from "./pages/MainPage";
import InventoryPage from "./pages/InventoryPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ErrorPage from "./pages/ErrorPage";

import pages from "../constants/page.constants";

import "../index.css";

import logo from "../images/logo.png";

const App: React.FC<AppProps> = () => {
  const { MAIN_PAGE, INVENTORY_PAGE, PAGE_1, PAGE_2, ERROR_PAGE } = pages;

  return (
    <BrowserRouter>
      <Navbar
        image={logo}
        pages={[
          { name: MAIN_PAGE.name, path: MAIN_PAGE.path },
          { name: INVENTORY_PAGE.name, path: INVENTORY_PAGE.path },
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
            path={INVENTORY_PAGE.path}
            element={<InventoryPage pageName={INVENTORY_PAGE.name} />}
          />
          <Route
            path={PAGE_1.path}
            element={<Page1 pageName={PAGE_1.name} />}
          />
          <Route
            path={PAGE_2.path}
            element={<Page2 pageName={PAGE_2.name} />}
          />
          <Route
            path={ERROR_PAGE.path}
            element={<ErrorPage mainPagePath={MAIN_PAGE.path} />}
          />
          <Route path={"*"} element={<Navigate to={ERROR_PAGE.path} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
