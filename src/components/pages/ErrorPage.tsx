import React from "react";
import { Link } from "react-router-dom";

import image from "../../images/unplugged_cable.jpg";

const ErrorPage: React.FC<ErrorPageProps> = ({ mainPagePath }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="text-center">
          <img src={image} alt="logo" style={{ width: "50%", height: "50%" }} />
          <h1>Hiba történt!</h1>
          <Link
            className="btn btn-primary"
            to={mainPagePath}
            style={{ width: "25%" }}
          >
            Főoldal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
