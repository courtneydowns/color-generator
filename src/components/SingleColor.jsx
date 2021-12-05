import React, { useState, useEffect } from "react";
import rgbToHex from "../utilities/utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value' style={{ letterSpacing: 1, fontSize: 17 }}>
        {weight}%
      </p>
      <p className='color-value' style={{ letterSpacing: 2, fontSize: 17 }}>
        {hexValue}
      </p>
      {alert && (
        <p className='alert' style={{ letterSpacing: 1 }}>
          Copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
