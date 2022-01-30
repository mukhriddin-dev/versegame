import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useMedia } from 'react-use'
import { Nav, Navbar } from 'react-bootstrap'
// @ts-ignore
import Logo from '../images/social/logo.svg'

const HighlightLinkItem = styled.div<{ color?: string, bordered?: boolean, backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || 'white'};
  border: ${({ bordered, color }) => bordered ? `1px solid ${color || 'white'}` : 'none'};
  padding: 0.5rem 1rem 0.325rem 1rem;
  font-size: 1rem;
  line-height: 1.375rem;
  vertical-align: middle;
`

const LinkItem = styled(Link)`
  color: white;
  font-family: Circe, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1.25rem 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: white;
  }
  @media(max-width: 768px) {
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navbarstyle = styled(Navbar)`
 position: fixed !important;
 padding: 0 4rem;
 width: 100%;
`

function NavbarMenu() {
  const isWide = useMedia('(min-width: 769px)');
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <Navbarstyle 
      collapseOnSelect
      id={"navi"}
      style={{
        alignItems: isMobile ? 'center' : 'flex-start',
        paddingTop: 0,
        backgroundColor: isMobile ? 'black' : 'transparent',
      }}
      expand="sm"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand>
        <LogoContainer>
          <img src={Logo} style={{ height: '2.25rem' }} />
        </LogoContainer>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center order-md-1">
        <Nav className="me-auto">
          <LinkItem to="/about">About</LinkItem>
          <LinkItem to="/roadmap">Roadmap</LinkItem>
          <LinkItem to="/whitepaper">Whitepaper</LinkItem>
          <LinkItem to="/staking">Staking</LinkItem>
          <LinkItem to="/liquidity">Liquidity</LinkItem>
        </Nav>
        <Nav>
          <LinkItem to="/marketplace">
            <HighlightLinkItem bordered color="#B6B6B6" backgroundColor="rgba(47, 47, 47, 0.6)">Marketplace</HighlightLinkItem>
          </LinkItem>
          <LinkItem to="/earn">
            <HighlightLinkItem bordered color="#FC6805" backgroundColor="rgba(230, 74, 38, 0.3)">Play and earn</HighlightLinkItem>
          </LinkItem>
        </Nav>
      </Navbar.Collapse>
    </Navbarstyle>
  )
}

// const Navbar = () => {
//   return (
//     <Container>
//       <RowContainer>
//         <LinkItem to="/">
//           <img src={Logo} style={{ width: '2rem', height: '2rem' }} />
//         </LinkItem>
//         <LinkItem to="/about">About</LinkItem>
//         <LinkItem to="/roadmap">Roadmap</LinkItem>
//         <LinkItem to="/whitepaper">Whitepaper</LinkItem>
//         <LinkItem to="/staking">Staking</LinkItem>
//         <LinkItem to="/liquidity">Liquidity</LinkItem>
//       </RowContainer>
//       <RowContainer>
//         <LinkItem to="/marketplace">Marketplace</LinkItem>
//         <LinkItem to="/earn">Play and earn</LinkItem>
//       </RowContainer>
//     </Container>
//   )
// }

export default NavbarMenu
