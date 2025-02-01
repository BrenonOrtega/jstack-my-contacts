import React from "react";
import { Overlay } from "./styles";
import { createPortal } from "react-dom";

const Loader: React.FC = () => {
  return createPortal(
    <Overlay >
      <div className="loader"></div>
    </Overlay>,
    document.getElementById("fullscreen-root")!
  );
};

export default Loader;
