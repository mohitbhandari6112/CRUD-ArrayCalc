// Note: Uncomment import lines during working with JSX Compiler.
import React, { useState } from "react";

const ArrayList = () => {
  const [list, setList] = useState([]);

  const addHandlerEnd = () => {
    const items = list;
    setList([...items, `itemList-${items.length}`]);
  };

  const addHandlerBeginning = () => {
    const items = list;
    setList([`itemList-${items.length}`, ...items]);
  };

  const removeHandler = (index) => {
    setList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <div style={{ margin: "25px" }}>
      {/* <div> Total List: {list.length} total items.</div> */}
      <button onClick={addHandlerBeginning}>addFirst</button>

      <button style={{ marginLeft: "20px" }} onClick={addHandlerEnd}>
        Add at the End
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeHandler(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArrayList;
