import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const Column = ({ column, tasks, moveTask, addTaskToDo }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, item.column, column),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="column-container"
      style={{
        opacity: isOver ? 0.5 : 1,
      }}
    >
      <h3>{column} ({tasks.length})</h3>
      <hr />
      {tasks.map((task) => (
        <Task key={task.id} task={task} column={column} />
      ))}
      {column == "To Do" && (
        <div
          className="task-add-container"
        >
          <p onClick={addTaskToDo}>ADD NEW TASK</p>
        </div>
      )}
    </div>
  );
};

export default Column;
