import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './Board';
import "./App.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Board />
      </div>
    </DndProvider>
  );
};

export default App;