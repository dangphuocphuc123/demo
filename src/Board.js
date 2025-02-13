import React, { useState } from "react";
import Column from "./Column";

const Board = () => {
  const [tasks, setTasks] = useState({
    "To Do": [
      { id: 1, title: "Task #1", text: "Title Test 1" },
      { id: 2, title: "Task #2", text: "Title Test 2" },
    ],
    "In Progress": [{ id: 3, title: "Task #3", text: "Title Test 3" }],
    Feedback: [{ id: 4, title: "Task #4", text: "Title Test 4" }],
    "Waiting For Review": [{ id: 5, title: "Task #5", text: "Title Test 5" }],
    "Ready For Test": [{ id: 6, title: "Task #6", text: "Title Test 6" }],
    Done: [{ id: 7, title: "Task #7", text: "Title Test 7" }],
  });

  const moveTask = (taskId, fromColumn, toColumn) => {
    setTasks((prevTasks) => {
      const task = prevTasks[fromColumn].find((t) => t.id === taskId);
      return {
        ...prevTasks,
        [fromColumn]: prevTasks[fromColumn].filter((t) => t.id !== taskId),
        [toColumn]: [...prevTasks[toColumn], task],
      };
    });
  };

  const getNextId = (tasks) => {
    const allIds = Object.values(tasks)
      .filter((column) => Array.isArray(column))
      .flat()
      .map((task) => task.id);
    console.log(allIds);
    const maxId = Math.max(...allIds);
    return maxId + 1;
  };

  const addTaskToDo = () => {
    const newTask = {
      id: getNextId(), // Tạo ID duy nhất dựa trên thời gian
      title: `Task#${getNextId()}`,
      text: `Title Test ${getNextId()}`,
    };

    setTasks((prevTasks) => ({
      ...prevTasks,
      "To Do": [...prevTasks["To Do"], newTask],
    }));
  };

  return (
    <div style={{ display: "flex" }}>
      {Object.keys(tasks).map((column) => (
        <Column
          key={column}
          column={column}
          tasks={tasks[column]}
          moveTask={moveTask}
          addTaskToDo={addTaskToDo}
        />
      ))}
    </div>
  );
};

export default Board;
