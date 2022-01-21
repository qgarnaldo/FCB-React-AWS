import { useState } from "react"; 
import Task from "./Task"

function TasksList() {
  const taskItemsList = [
  "Follow 116464",
  "Follow 2656464",
  "follow 345454",
  "Follow 45515"
  ]; 

const [taskValue, setTaskValue] = useState("Just another task")
//console.log("TaskValue", taskValue);

const inputChangeHandler = (e) => {
  // blank
  setTaskValue(e.target.value)
};

  return (
    <>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
      />
      <ul>
        {taskItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />; 
        })}
      </ul>
    </>  
  );
}

export default TasksList;