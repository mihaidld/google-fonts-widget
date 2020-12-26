import React, { useContext } from "react";
import { Context } from "./../../context/Context";
import GoogleFontLoader from "react-google-font-loader";

const Font = ({ name, numberVariants, category, link }) => {
  const { inputText, fontSize } = useContext(Context);

  return (
    <article className="col-lg-6 mb-3">
      <div className="shadow p-3 card">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{name}</span>
          <small>{numberVariants} variant(s)</small>
        </h2>
        <p>
          <span className="badge bg-dark">{category.toUpperCase()}</span>
        </p>
        <GoogleFontLoader
          fonts={[
            {
              font: name,
              weights: [400],
            },
          ]}
        />
        <p
          className="sample"
          style={{ fontFamily: name, fontSize: `${fontSize}px` }}
        >
          {inputText}
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="text-danger"
          href={link}
        >
          Voir sur Google Fonts (ouvre un nouveau tab)
        </a>
      </div>
    </article>
  );
};

export default Font;
