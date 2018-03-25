import React from 'react'
import styled from 'styled-components'

import { slide } from './animations'
import Link from './link'

const Wrapper = styled.div`
  animation-duration: 700ms;
  animation-name: ${slide('-60px', true)};
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  position: absolute;
  width: 100%;
`

const Name = styled.div`
  color: white;
  letter-spacing: 10px;
  text-transform: uppercase;
`

const Links = styled.div`
  margin: 10px 0;

  > div {
    display: inline-block;
  }
`

const Letter = styled(Link)`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 10px;
  transition: all 300ms;
  width: 40px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    text-decoration: none;

    + div {
      opacity: 1;
      z-index: 10;
    }
  }
`

const Title = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  height: 40px;
  opacity: 0;
  padding: 0 20px;
  position: absolute;
  top: 10px;
  transform-origin: 0 100%;
  transform: rotate(90deg);
  transition: all 300ms;
  white-space: nowrap;
  z-index: -1;
`

export default function Header () {
  // { name: 'Games', link: '/' },
  // { name: 'Projects', link: '/projects' },
  // { name: 'Resume', link: '/' }
  return (
    <Wrapper>
      <Name>Dallin Osmun</Name>
      <Links>
        <A name='Home' href='/' internal />
        <A name='Github' href='https://www.github.com/numso' />
        <A name='LinkedIn' href='https://www.linkedin.com/in/dallin-osmun' />
      </Links>
    </Wrapper>
  )
}

function A ({ name, href, internal }) {
  return (
    <div>
      <Letter href={href} internal={internal}>
        {name[0]}
      </Letter>
      <Title>{name}</Title>
    </div>
  )
}
