import React from "react";
import "./Loading.css";
type ILoadingProps = {
  height?: string;
};

const Loading: React.FC<ILoadingProps> = ({ height = "100vh" }) => {
  return (
    <div style={{ height }}>
      <div className="loading-container">
        <div data-testid="loading" className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
