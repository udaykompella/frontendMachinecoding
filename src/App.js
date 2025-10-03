import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState();
  const [renderBox, setRenderBox] = useState([]);
  const [hexCol, setHexCol] = useState('');
  useEffect(() => {
    setRenderBox(Array.from({ length: number }, () => 'red'));
  }, [number]);

  const toggleColor = (index) => {
    debugger;
    setRenderBox((prev) =>
      prev.map((c, i) => {
        debugger;
        return i === index ? (c === 'red' ? 'green' : 'red') : c;
      })
    );
  };
  const removeBox = (index) => {
    setRenderBox((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input
        value={number}
        type="number"
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <div className="container">
        {renderBox.length > 0 &&
          renderBox.map((box, index) => (
            <div
              key={index}
              className={`box`}
              style={{
                border: '1px solid blue',
                backgroundColor: box,
              }}
              onClick={() => toggleColor(index)}
            >
              <span
                className="close"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(renderBox, index, 'renderboxes');
                  removeBox(index);
                }}
              >
                X
              </span>
              {/* red */}
            </div>
          ))}
      </div>
    </div>
  );
}
