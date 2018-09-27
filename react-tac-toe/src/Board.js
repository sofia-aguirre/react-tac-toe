import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class Board extends Component {

  constructor(){
    super()
    this.state = {
      player1: true,
      game: ['', '', '', '', '', '', '', '', '']
    }
  }

  reportMark = (pos) => {
    console.log(pos)
  }

  render() {

    let squares = []

    for(let i = 0; i < 9; i++){
      squares.push( <Square 
                      key={i} 
                      pos={i} 
                      mark={this.state.game[i]}
                      reportMark={this.reportMark} // giving my function to Square
                      /> )
    }

    return (
      <div>
        <h1>React-Tac-Toe</h1>

        <h4>Player: {this.state.player1 ? 'Player 1' : 'Player 2' }</h4>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default Board;


