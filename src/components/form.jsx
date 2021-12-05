import React, { useState } from "react";
import Values from "values.js";

export default function Form() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#DAA520").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
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
      <section></section>
    </>
  );
}
