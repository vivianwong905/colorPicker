import { useState } from "react";

const Color = ({ color, onSelectColor, selectedColor}) => {
  return (
    <div
      className={`${color} ${color === selectedColor ? "selected" : ""}`}
      // color can be call onSelectColor
      onClick={() => onSelectColor(color)}
    ></div>
  );
};

// root level component, highest
const App = () => {

  const [selectedColor, setSelectedColor] = useState("");
  console.log({selectedColor, setSelectedColor});
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          onSelectColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="orange"
          onSelectColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="green"
          onSelectColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
