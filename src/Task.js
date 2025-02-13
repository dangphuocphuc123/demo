import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task, column }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className='task-container'
      style={{
        backgroundColor: isDragging ? 'lightgray' : '#f0f0f0',
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.text}</p>
      <hr/>
      <p>Assign: ...</p>
      <hr/>
      <p>Comment: ...</p>
    </div>
  );
};

export default Task;
