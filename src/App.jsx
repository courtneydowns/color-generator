import React, { useState } from "react";
import Values from "values.js";
import "./App.css";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#BC3AFE").all(5));

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
        <h3 className='title'>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#BC3AFE or type a hex code or color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
            style={{
              width: 375,
              letterSpacing: 1,
              fontSize: 17,
              height: 35,
            }}
          />
          <button className='btn' type='submit'>
            Get Colors
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
