import React from 'react'

import Cell from './cell'
import * as GameState from './game-state'
import Row from './row'

export default class Game extends React.Component {
  state = {
    cells: GameState.getState(),
    paintValue: true
  }

  setPaintValue = paintValue => {
    this.setState({ paintValue })
  }

  componentDidMount () {
    GameState.onChange(() => {
      this.setState({ cells: GameState.getState() })
    })
  }

  render () {
    return (
      <div className='grid'>
        {this.state.cells.map((row, x) => (
          <Row key={`row-${x}`}>
            {row.map((cell, y) => (
              <Cell
                key={`cell-${x}-${y}`}
                x={x}
                y={y}
                alive={cell}
                paintValue={this.state.paintValue}
                setPaintValue={paintValue => this.setState({ paintValue })}
                setCell={GameState.setCell}
              />
            ))}
          </Row>
        ))}
      </div>
    )
  }
}
