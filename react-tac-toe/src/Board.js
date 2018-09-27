import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class Board extends Component {

  constructor(){
    super()
    this.state = {
      player1: true,
      game: ['', '', '', '', '', '', '', '', ''],
      message: '',
      inPlay: true
    }
  }

  reportMark = (pos) => {
    if(!this.state.inPlay){
      return null;
    }
    let mark = this.state.player1 ? 'X' : 'O';
    console.log(`Player ${mark} at position ${pos}`)

    // set my mark in the game array
    if(this.state.game[pos] === ''){
      let game = this.state.game
      game[pos] = mark
      this.setState({ game })
      this.checkWin(mark)
      this.flip()
    }

  }

  flip  = () => {
    let player1 = !this.state.player1
    this.setState({
      player1
    })
  }

  checkWin = (mark) => {
    let game = this.state.game 
    if(
      (game[0] === mark &&  game[3] === mark  &&  game[6] === mark) ||
      (game[1] === mark &&  game[4] === mark    &&  game[7] === mark) ||
      (game[2] === mark &&  game[5] === mark  &&  game[8] === mark) ||

      (game[0] === mark &&  game[1] === mark  &&  game[2] === mark) ||
      (game[3] === mark &&  game[4] === mark  &&  game[5] === mark) ||
      (game[6] === mark &&  game[7] === mark  &&  game[8] === mark) ||

      (game[0] === mark &&  game[4] === mark  &&  game[8] === mark) ||
      (game[2] === mark &&  game[4] === mark  &&  game[6] === mark) 
      )
      {
      this.setState({
        message: `PLAYER ${(mark === 'X') ? 1: 2} WINS!!!!`, inPlay: false
      })
    }
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
        <h3>{this.state.message}</h3>
        <h4>Player: {this.state.player1 ? 'Player 1' : 'Player 2' }</h4>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default Board;


