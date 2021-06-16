import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="oops">Oops!</h1>
      <p className="error-page-p">Looks like this page doesnt exist</p>
      <Link className="error-link" to="/">
        <div className="error-link-div">
          <h3 className="error-link-text">Go Back To Homepage</h3>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
