import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class Board extends Component {
  render() {
    return (
      <div>
        <h1>React-Tac-Toe</h1>
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;


