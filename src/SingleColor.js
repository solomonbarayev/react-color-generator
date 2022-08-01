import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    let alertTimer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(alertTimer);
    };
  }, [alert]);

  const lightColor = {
    color: "#fff",
  };
  return (
    <article
      className={`color`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value" style={index > 10 ? lightColor : null}>
        {weight}%
      </p>
      <p className="color-value" style={index > 10 ? lightColor : null}>
        {hex}
      </p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
