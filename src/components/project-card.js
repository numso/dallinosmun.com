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
  width: 100%;
`

const Details = styled.div`
  padding: 20px;
  text-align: left;
`

const Title = styled.div`
  color: black;
  font-size: 24px;
`

const Date = styled.div`
  color: #aaa;
`

export default function ProjectCard (props) {
  return (
    <Wrapper href={props.url}>
      <Image src={props.img} />
      <Details>
        <Title>{props.name}</Title>
        <Date>{props.date}</Date>
      </Details>
    </Wrapper>
  )
}
