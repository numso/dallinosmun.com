import React from 'react'
import styled from 'styled-components'

import { slide } from './animations'
import Link from './link'

const Wrapper = styled(Link)`
  animation-duration: 700ms;
  animation-name: ${slide('100px')};
  background-color: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  max-height: 360px;
  margin: 30px;
  transition: box-shadow 300ms;
  max-width: 600px;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.6);
  }
`

const Image = styled.img`
  border-bottom: 1px solid #aaa;
  display: block;
  height: calc(100% - 60px);
  width: 100%;
`

const Title = styled.div`
  align-items: center;
  color: black;
  display: flex;
  font-size: 24px;
  height: 60px;
  padding-left: 20px;
`

export default function ProjectCard (props) {
  return (
    <Wrapper href={props.url}>
      <Image src={props.img} />
      <Title>{props.name}</Title>
    </Wrapper>
  )
}
