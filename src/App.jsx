import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./status (1).json";

function App() {
  // const [count, setCount] = useState(0)
  const filtered = data.slice(0, 10);
  return (
    <>
      <div>
        <ul>
          {filtered.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          ;
        </ul>
      </div>
    </>
  );
}

export default App;
