import { useState } from "react";
import "./App.css";
function App() {
  const [name, setN] = useState("");
  const [email, setE] = useState("");
  // const [gen, setg] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    // console.log("ggshg"+gen);
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <div className="Outer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setN(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setE(e.target.value)}
          required
        />
        {/* <select  onChange={(e) =>setg(e.target.value)}>
        <option value="Male">Male </option>
           <option value="Female" >Fen</option>
      </select> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
