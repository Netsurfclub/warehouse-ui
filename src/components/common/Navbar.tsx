import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = ({ image, mainPagePath, pages }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getNavbarTogglerClass = (): string => "navbar-toggler";

  const toggle = (): void => setIsOpen(!isOpen);

  const getNavbarCollapseClass = (): string =>
    "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse";

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
        <div className="container">
          <div className="mt-2 mb-2">
            <img
              src={image}
              alt="logo"
              style={{ width: "180px", height: "80px" }}
            />
          </div>
          <button
            className={
              isOpen
                ? getNavbarTogglerClass()
                : `${getNavbarTogglerClass()} collapsed`
            }
            type="button"
            onClick={toggle}
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              isOpen
                ? getNavbarCollapseClass()
                : `${getNavbarCollapseClass()} show`
            }
          >
            <div className="navbar-nav flex-grow">
              {pages.map(({ name, path }) => (
                <Link key={name} className="nav-item nav-link" to={path}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
