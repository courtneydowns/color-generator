import React, { useState } from "react";
import Values from "values.js";

export default function Form() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            placeholder='Input color'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className='btn' type='submit'>
            Get Colors
          </button>
        </form>
      </section>
    </>
  );
}
