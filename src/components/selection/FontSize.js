import React, { useContext } from "react";
import { Context } from "./../../context/Context";

const FontSize = () => {
  const { fontSize, setFontSize } = useContext(Context);

  const handleInputChange = (event) => {
    setFontSize(event.target.value);
  };
  
  return (
    <>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        value={fontSize}
        onChange={handleInputChange}
      />
    </>
  );
};

export default FontSize;
