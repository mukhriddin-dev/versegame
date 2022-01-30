import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import styled from 'styled-components'
// @ts-ignore
import SmokeImage from '../images/smoke.svg'

const SmokeContainer = styled.div`
  background-image: url(${SmokeImage});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`

export default function Layout({ children }) {
  return <div style={{ position: 'relative' }}>
    <SmokeContainer>
      {children}
    </SmokeContainer>
  </div>
}
