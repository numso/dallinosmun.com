import React from 'react'

import Game from './_components/game'
import * as GameState from './_components/game-state'
import Pattern from './_components/pattern'
import patterns from './_components/patterns'
import App from '../../components/app'

const WIDTH = 50
const HEIGHT = 40

GameState.init(WIDTH, HEIGHT)

export default class Conway extends React.Component {
  state = {
    running: false,
    curPattern: 0
  }

  onStart = () => {
    const fn = this.state.running ? 'stop' : 'start'
    GameState[fn]()
    this.setState({ running: !this.state.running })
  }

  clickedPattern = i => {
    this.setState({ curPattern: i })
  }

  copyPattern = i => {
    GameState.pastePattern(patterns[i])
  }

  render () {
    return (
      <App>
        <div style={{ width: 1420 }}>
          <div>Conway's Game of Life</div>
          <div style={{ display: 'inline-block' }}>
            <Game />
            <div>
              <button onClick={this.onStart}>
                {this.state.running ? 'Stop' : 'Start'} Simulation
              </button>
              <button onClick={() => GameState.step()}>Step</button>
              <button onClick={() => GameState.init(WIDTH, HEIGHT, true)}>
                Randomize
              </button>
              <button onClick={() => GameState.clear(WIDTH, HEIGHT)}>
                Clear
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'inline-block',
              paddingLeft: 20,
              verticalAlign: 'top',
              width: 597
            }}
          >
            <h3>Clipboard</h3>
            <Pattern
              cells={patterns[this.state.curPattern]}
              onClick={() => this.copyPattern(this.state.curPattern)}
            />

            <div
              style={{
                borderBottom: '3 solid',
                width: '100%',
                marginBottom: 20
              }}
            />

            <h3>Saved Patterns</h3>
            <div className='pattern-holder'>
              {patterns.map((pattern, i) => (
                <Pattern
                  key={`pattern-${i}`}
                  cells={pattern}
                  onClick={() => this.clickedPattern(i)}
                />
              ))}
            </div>
          </div>
          <style jsx global>{`
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .pattern-holder {
              box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5) inset;
              padding: 10px;
              height: 430px;
              overflow: scroll;
            }

            .grid {
              display: inline-block;
              border-left: 1px solid;
              border-top: 1px solid;
            }

            .cell {
              border-right: 1px solid;
              border-bottom: 1px solid;
              width: 15px;
              height: 15px;
              display: inline-block;
            }

            .cell.alive {
              background: black;
            }
          `}</style>
        </div>
      </App>
    )
  }
}
