import { useState } from "react";
import "./App.css";
export default function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="Outer">
      <form>
        <label>
          Input Value:{" "}
          <input type="text" value={inputValue} onChange={handleChange} />{" "}
        </label>{" "}
        <p>Input Value: {inputValue}</p>
      </form>
    </div>
  );
}
