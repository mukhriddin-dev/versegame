import React from 'react'
import styled from 'styled-components'

const RoadmapTitle = styled.div`
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.375rem;
  line-height: 1.5rem;
  text-align: center;
  color: #EBEBEB;
  margin-bottom: 1.5rem;
`

const RoadmapItemText = styled.div`
  font-family: Circe, sans-serif;
  font-style: normal;
  font-weight: 350;
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: center;
  color: #C2C2C2;
  margin-top: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.875rem;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  margin: 1.5625rem 1rem;

  @media(max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`
type Props = {
  title: string
  items: string[]
  margin?: string
}

const RoadmapItem = (props: Props) => {
  return (
    <Container style={{ margin: props.margin }}>
      <RoadmapTitle>{props.title}</RoadmapTitle>
      {
        props.items.map((item) => (
          <RoadmapItemText key={item}>{item}</RoadmapItemText>
        ))
      }
    </Container>
  )
}

export default RoadmapItem
