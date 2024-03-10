import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import InventoryPage from "./pages/InventoryPage";
import ErrorPage from "./pages/ErrorPage";

import { INVENTORY_PAGE, ERROR_PAGE } from "../constants/page.constants";

import "../index.css";

import logo from "../images/logo.png";

const App: React.FC<AppProps> = () => {
  const pages: Page[] = [INVENTORY_PAGE];

  const inventoryPageComponent: JSX.Element = (
    <InventoryPage pageName={INVENTORY_PAGE.name} />
  );
  const errorPageComponent: JSX.Element = (
    <ErrorPage pageName={ERROR_PAGE.name} />
  );
  const navigationComponentToInventoryPage: JSX.Element = (
    <Navigate to={INVENTORY_PAGE.path} />
  );
  const navigationComponentToErrorPage: JSX.Element = (
    <Navigate to={ERROR_PAGE.path} />
  );

  return (
    <BrowserRouter>
      <Navbar image={logo} pages={pages} />
      <main className="container">
        <Routes>
          <Route path={INVENTORY_PAGE.path} element={inventoryPageComponent} />
          <Route path={ERROR_PAGE.path} element={errorPageComponent} />
          <Route path={"/"} element={navigationComponentToInventoryPage} />
          <Route path={"*"} element={navigationComponentToErrorPage} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
