import { useState } from "react"; 
import Task from "./Task"

function TasksList() {
    const [taskItemsList, setTaskItemsList] = useState([
    "Follow Edukasyon.ph on Facebook.", // 0
    "Follow AWS Siklab Pilipinas on Facebook.", // 1
    "Follow Zuitt Coding Bootcamp on Facebook." // 2
  ]);

const [taskValue, setTaskValue] = useState("Just another task")

const inputChangeHandler = (e) => {
  // blank
  setTaskValue(e.target.value)
};

const addTaskHandler = (e) => {
  setTaskItemsList([e.target.value,...taskItemsList]);
}

  return (
    <>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
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