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
    let mark = this.state.player1 ? 'X' : 'O';
    console.log(`Player ${mark} at position ${pos}`)
    // set my mark in the game array
    
    if(this.state.game[pos] === ''){
      let game = this.state.game
      game[pos] = mark
      this.setState({
        game
      })
    }

    // TODO: checkWin()
    this.flip()
  }

  flip  = () => {
    let player1 = !this.state.player1
    this.setState({
      player1
    })
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


