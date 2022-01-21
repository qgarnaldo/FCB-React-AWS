import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//My first component

function Task(props){
	return(
		<li className="tasks-item">{props.taskName}</li>
	);
}

function TasksList() {
  const taskItemsList = [
  "Follow 116464",
  "Follow 2656464",
  "follow 345454",
  "Follow 45515"
  ]; 

  return (
    <div>
      <input className="task-input" />
      <ul>
        {taskItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />; 
        })}
      </ul>
    </div>  
  );
}

function App() {
	const paraStyle = {
		"marginBottom" : "15px"
	}


return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p style={paraStyle} >The most simple and amazing todo-list React app.</p>
        <TasksList />
      </header>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));