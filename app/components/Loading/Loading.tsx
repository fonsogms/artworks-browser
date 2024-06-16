import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div data-testid="loading" className="spinner"></div>
    </div>
  );
};

export default Loading;
