import { map } from 'lodash'
import React from 'react'
import styled from 'styled-components'

import { slide } from './animations'

const HeaderBox = styled.div`
  background-color: #787571;
  background: -webkit-gradient(
      radial,
      center 0,
      0,
      center 0,
      100,
      color-stop(0%, #787571),
      color-stop(100%, #242424)
    )
    no-repeat;
  background: -webkit-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -moz-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -o-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -ms-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;
    width: 1000px;
  }
`

const Subtitles = styled.div`
  display: flex;
`
const Subtitle = styled.div`
  animation-delay: ${props => props.delay};
  animation-fill-mode: backwards;
  animation-duration: 700ms;
  animation-name: ${slide('30px')};
  color: #f5ce43;
  flex: 1;
  font-size: 20px;
`

const HeaderTitle = styled.div`
  color: white;
  font-family: 'Syncopate', sans-serif;
  font-size: 48px;
`

export default function ({ title, subtitles }) {
  return (
    <HeaderBox>
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <Subtitles>
          {map(subtitles, (subtitle, i) => (
            <Subtitle delay={`${1000 + i * 300}ms`}>{subtitle}</Subtitle>
          ))}
        </Subtitles>
      </div>
    </HeaderBox>
  )
}
