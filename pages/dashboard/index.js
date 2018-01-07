import React from 'react'

import Card from './_components/card'
import ChartHeader from './_components/chart-header'
import Bar from './_components/charts/bar'
import Donut from './_components/charts/donut'
import Donut2 from './_components/charts/donut2'
import Donut3 from './_components/charts/donut3'
import Donut4 from './_components/charts/donut4'
import Donut5 from './_components/charts/donut5'
import Line from './_components/charts/line'
import Pie from './_components/charts/pie'
import Pie2 from './_components/charts/pie2'
import Pie3 from './_components/charts/pie3'
import Pie4 from './_components/charts/pie4'
import Pie5 from './_components/charts/pie5'
import Pie6 from './_components/charts/pie6'
import App from '../../components/app'

const randNum = (min, max) => Math.floor(Math.random() * max)
const generateData = (len, max = 100) =>
  Array.apply(null, Array(len)).map(() => randNum(0, max))

export default class Dashboard extends React.Component {
  render () {
    return (
      <App>
        <div className='wrapper'>
          <div className='header'>
            <img src='/static/img/confus.jpg' className='logo' alt='logo' />
            <h2>Welcome to the Dashboard</h2>
          </div>

          <Card
            header={
              <ChartHeader title='Page Views' subtitle='August 2016'>
                {width => (
                  <svg
                    width={width}
                    height={width / 4}
                    style={{
                      WebkitFilter: 'drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5))'
                    }}
                  >
                    <Line
                      stroke='white'
                      data={generateData(8, width / 4)}
                      width={width}
                      height={width / 4}
                    />
                  </svg>
                )}
              </ChartHeader>
            }
          >
            <div style={{ textAlign: 'center' }}>
              <svg width={120} height={120}>
                <Donut
                  data={generateData(2, 100)}
                  innerRadius={120 / 2 * 0.4}
                  radius={120 / 2}
                />
              </svg>
            </div>
          </Card>

          <Card header='Pie Chart'>
            <svg width={200} height={200}>
              <Pie radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Pie Chart (test 2)'>
            <svg width={200} height={200}>
              <Pie2 radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Pie Chart (test 3)'>
            <svg width={200} height={200}>
              <Pie3 radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Pie Chart (test 4)'>
            <svg width={200} height={200}>
              <Pie4 radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Pie Chart (test 5)'>
            <svg width={200} height={200}>
              <Pie5 radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Pie Chart (test 6)'>
            <svg width={200} height={200}>
              <Pie6 radius={100} data={generateData(6, 20)} />
            </svg>
          </Card>

          <Card header='Donut Chart'>
            <svg width={200} height={200}>
              <Donut radius={100} innerRadius={80} data={generateData(5, 20)} />
            </svg>
          </Card>

          <Card header='Donut Chart (test 2)'>
            <svg width={200} height={200}>
              <Donut2
                radius={100}
                innerRadius={80}
                data={generateData(5, 20)}
              />
            </svg>
          </Card>

          <Card header='Donut Chart (test 3)'>
            <svg width={200} height={200}>
              <Donut3
                radius={100}
                innerRadius={80}
                data={generateData(5, 20)}
              />
            </svg>
          </Card>

          <Card header='Donut Chart (test 4)'>
            <svg width={200} height={200}>
              <Donut4
                radius={100}
                innerRadius={80}
                data={generateData(5, 20)}
              />
            </svg>
          </Card>

          <Card header='Donut Chart (test 5)'>
            <svg width={200} height={200}>
              <Donut5
                radius={100}
                innerRadius={80}
                data={generateData(5, 20)}
              />
            </svg>
          </Card>

          <Card header='Line Chart'>
            <svg width={200} height={100}>
              <Line
                stroke='lightblue'
                data={generateData(8)}
                width={200}
                height={100}
              />
            </svg>
          </Card>

          <Card header='Bar Chart'>
            <svg width={200} height={100}>
              <Bar
                stroke='#43ADB4'
                data={generateData(8)}
                width={200}
                height={100}
              />
            </svg>
          </Card>

          <style jsx>{`
            .wrapper {
              background-color: #545B5D;
            }

            .header {
              align-items: center;
              background-color: #222;
              box-sizing: content-box;
              display: flex;
              flex-direction: column;
              height: 150px;
              padding: 20px;
            }

            .header > h2 {
              border: none;
              color: white;
              font-size: 1.5em;
              font-weight: bold;
              margin: 0.83em 0;
            }

            .logo {
              animation: logo-spin infinite 20s linear;
              height: 80px;
            }

            @keyframes logo-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </App>
    )
  }
}
