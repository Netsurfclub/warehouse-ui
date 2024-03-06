import React from "react";

import robotImage from "../../images/robot.jpg";
import { Link } from "react-router-dom";

const ErrorPage: React.FC<ErrorPageProps> = ({ mainPagePath }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="text-center">
          <img
            src={robotImage}
            alt="logo"
            style={{ width: "45%", height: "45%" }}
          />
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
