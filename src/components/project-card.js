import React from 'react'
import styled from 'styled-components'

import { slide } from './animations'
import { Link } from './ui'

export default function ProjectCard ({ img, url, name, date, description }) {
  const [flipped, setFlipped] = React.useState(false)
  return (
    <Wrapper onClick={() => setFlipped(a => !a)}>
      <Front flipped={flipped}>
        <Image src={img} />
        <Details as={url ? Link : 'div'} href={url}>
          <Title>{name}</Title>
          <Date>{date}</Date>
        </Details>
      </Front>
      <Back flipped={!flipped}>
        <Description>{description}</Description>
        {url ? (
          <VisitLink href={url}>visit</VisitLink>
        ) : (
          'Site no longer available'
        )}
      </Back>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  animation-duration: 700ms;
  animation-name: ${slide('100px')};
  background-color: white;
  border: none;
  display: inline-block;
  margin: 30px;
  max-width: 600px;
  outline: none;
  perspective: 800px;
  position: relative;
`

const CardFace = styled.div`
  backface-visibility: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transition: box-shadow 300ms, transform 800ms;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.6);
  }
`

const Image = styled.img`
  border-bottom: 1px solid #aaa;
  display: block;
  width: 100%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

const Details = styled.div`
  display: block;
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

const Front = styled(CardFace)`
  transform: rotateY(${props => (props.flipped ? -180 : 0)}deg);
`

const Back = styled(CardFace)`
  background: white;
  font-size: 18px;
  height: 100%;
  padding: 30px;
  position: absolute;
  text-align: left;
  top: 0;
  transform: rotateY(${props => (props.flipped ? 180 : 0)}deg);
`

const Description = styled.div`
  overflow: auto;
  height: calc(100% - 70px);
  margin-bottom: 30px;
`

const VisitLink = styled(Link)`
  background: #61a0ff;
  color: white;
  display: block;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  transition: background 200ms;

  &:hover {
    background: #488ef9;
  }
`
