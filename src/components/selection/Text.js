import React, { useContext } from "react";
import { Context } from "./../../context/Context";

const Text = () => {
  const { inputText, setInputText } = useContext(Context);

  const handleTextareaChange = (event) => {
    setInputText(event.target.value);
  };
  
  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tapez votre text
      </label>
      <textarea
        id="text"
        className="form-control"
        value={inputText}
        onChange={handleTextareaChange}
      />
    </div>
  );
};

export default Text;
