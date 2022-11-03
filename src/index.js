import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Screen from "./components/Screen/Screen";

const App = () => {
  return (
    <div className="main-container">
      <Screen/>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
