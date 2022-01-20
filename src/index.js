import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component

function HelloWorld() {
	const paraStyle = {
		"marginBottom" : "15px"
	}
	return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p style={paraStyle} >The most simple and amazing todo-list React app.</p>
        <ul>
        	<li className="tasks-item">Follow 1</li>
        	<li className="tasks-item">Follow 2</li>
        	<li className="tasks-item">Follow 3</li>
        </ul>
      </header>
    </div>
  );
}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));