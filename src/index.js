import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component

function HelloWorld() {
	return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p>The most simple and amazing todo-list React app.</p>
      </header>
    </div>
  );
}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));