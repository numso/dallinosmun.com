import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`

const Name = styled.div`
  color: black;
  letter-spacing: 10px;
  text-transform: uppercase;
`

const Links = styled.div`
  margin: 10px 0;
`

const Link = styled.div`
  display: inline-block;
`

const Letter = styled.a`
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
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Games', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/' }
  ]
  return (
    <Wrapper>
      <Name>Dallin Osmun</Name>
      <Links>
        {navItems.map(({ name, link }) => (
          <Link key={name}>
            <Letter href={link}>{name[0]}</Letter>
            <Title>{name}</Title>
          </Link>
        ))}
      </Links>
    </Wrapper>
  )
}
