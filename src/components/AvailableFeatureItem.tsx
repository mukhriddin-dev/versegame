import React from 'react'
import styled from 'styled-components'

const AvailableFeature = styled.div`
  border: 2px solid rgba(67, 67, 67);
  background-color: rgb(9, 9, 9);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 21.875rem;
  border-radius: 4px;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  margin: 1.5625rem 1rem;
  max-height: 27.6825rem;
  @media(max-width: 768px) {
    margin: 1rem 0;
  }
`

const AvailableFeatureTitle = styled.div`
  font-family: 'Circe', sans-serif;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0em;
  color: #F2F2F2;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1rem;
`

const AvailableFeatureDescription = styled.div`
  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-top: 0.75rem;
  color: #C2C2C2;
  text-align: center;
`

type AvailableFeatureItemProps = {
  title: string
  description: string
  titleMargin?: string
  image: React.ReactNode
}

const AvailableFeatureItem = (props: AvailableFeatureItemProps) => {
  return (
    <AvailableFeature>
      {props.image}
      <AvailableFeatureTitle style={{ marginTop: props.titleMargin }}>{props.title}</AvailableFeatureTitle>
      <AvailableFeatureDescription>{props.description}</AvailableFeatureDescription>
    </AvailableFeature>
  )
}

export default AvailableFeatureItem
