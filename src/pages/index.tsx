// import * as React from "react"
import React, { useCallback, useEffect, useState  } from 'react';

import styled from "styled-components"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
// @ts-ignore
import BackgroundImage from '../images/main_bg.png'
// @ts-ignore
import CharImage from '../images/char1.png'
// @ts-ignore
import WeaponsImage from '../images/weapons.png'
// @ts-ignore
import LogoImage from '../images/social/logo.svg'
// @ts-ignore
import SmokeImage from '../images/smoke.svg'
// @ts-ignore
import SchemaImage from '../images/schematic.svg'
// @ts-ignore
import CurrencyImage from '../images/currency.png'
import AvailableFeatureItem from "../components/AvailableFeatureItem"
import RoadmapItem from "../components/RoadmapItem"
import { Link } from "gatsby"
import SocialLinksRow from "../components/SocialLinksRow"
import { INVESTMENTS_EMAIL, PARTNERSHIPS_EMAIL, SUPPORT_EMAIL } from "../constants"
import { useMedia } from "react-use"
import { StaticImage } from "gatsby-plugin-image"

const AvailableFeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RoadmapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
 
  }
`

const Background = styled.div`
  background-color: black;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  width: 100%;
  /* padding: 0 2rem; */
  @media(max-width: 768px) {
    height: 40vh;
    padding: 0;
    background-size: cover;
  }
  @media(min-width: 1920px) {

    min-height: 130vh;
  }
`

const FeatureBlock = styled.div`
  display: flex;
  font-family: Circe, sans-serif;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  color: #ADADAD;

  @media(max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem !important;
  }
`

const FeatureElement = styled.div<{ padding?: string }>`
  width: 50%;
  padding: ${({ padding }) => padding || '0'};

  @media(max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

const FeatureTitle = styled.div`
  font-family: 'Century Gothic', sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem;
  letter-spacing: 0em;
  text-align: left;
  color: #F2F2F2;
  margin-bottom: 1rem;

  @media(max-width: 768px) {
    text-align: center;
    margin-top: 2rem !important;
  }
`

const Char = styled.div`
  background-image: url(${CharImage});
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: contain;

  @media(max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

const Weapons = styled.div`
  background-image: url(${WeaponsImage});
  background-repeat: no-repeat;
  background-color: black;
  background-position: left;
  height: 100%;
  width: 100%;
  background-size: contain;

  @media(max-width: 768px) {
    width: 100%;
    min-height: 80vh;
  }
`

const Schematic = styled.div`
  background-image: url(${SchemaImage});
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: contain;

  @media(max-width: 768px) {
    width: 100%;
    min-height: 80vh;
  }
`

const Currency = styled.div`
  background-image: url(${CurrencyImage});
  background-repeat: no-repeat;
  background-color: black;
  background-position: left;
  height: 100%;
  width: 100%;
  background-size: contain;

  @media(max-width: 768px) {
    width: 100%;
    min-height: 80vh;
  }
`

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15rem 2rem 3rem 2rem;

  @media(max-width: 768px) {
    flex-direction: column;
    margin: 0 0 3rem 0;
    align-items: center;
  }
`

const Logo = styled.img`
  height: 11rem;
`

const Copyright = styled.div`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  margin-top: 1rem;
`

const FooterTitle = styled.div<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-transform: ${({ capitalize }) => !capitalize ? 'uppercase' : 'capitalize'};
  color: white;
  margin-bottom: 0.5rem;

  @media(max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
  }
`

const FooterLink = styled(Link)<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-transform: ${({ capitalize }) => !capitalize ? 'uppercase' : 'capitalize'};
  text-decoration: none;
  color: #B0B0B0;
  &:visited {
    text-decoration: none;
    color: #B0B0B0;
  }
  &:hover {
    text-decoration: none;
    color: #B0B0B0;
  }

  @media(max-width: 768px) {
    text-align: center;
  }
`

const FooterHrefLink = styled.a<{capitalize?: boolean}>`
  font-family: Circe, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  color: #B0B0B0;
  &:visited {
    text-decoration: none;
    color: #B0B0B0;
  }

  @media(max-width: 768px) {
    text-align: center;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  margin: 0 3.25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`

const ContentContainer = styled.div<{ wider?: boolean }>`
  max-width: ${({ wider }) => wider ? '1328px' : '1120px'};
`

const LinkButton = styled(Link)<{ borderColor?: string, color?: string, backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  color: ${({ color }) => color || 'white'};
  border: ${({ borderColor }) => `1px solid ${borderColor || 'white'}`};
  padding: 0.5rem 1rem 0.325rem 1rem;
  font-size: 1rem;
  line-height: 1.375rem;
  vertical-align: middle;
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    text-decoration: none;
    color: ${({ color }) => color};
  }
  &:hover {
    color: ${({ color }) => color};
  }
`
const mm = styled.div`
 background-color: #0E0E0E !important;

-webkit-transition: background-color 600ms linear;
-ms-transition: background-color 600ms linear;
transition: background-color 600ms linear;
` 



const IndexPage = () => {
  const isMobile = useMedia('(max-width: 768px)');
  const isWider = useMedia('(min-width: 1920px)')

  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  useEffect(() => {
  
    onScroll();
    window.addEventListener("scroll", onScroll);
    const someElement= document.getElementById("navi");


    

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
 
   const someElement= document.getElementById("navi");
   console.log(scroll)
   if(scroll >0){
    // document.getElementById("navi").style.backgroundColor= #0E0E0E
    someElement.classList.add('blackNav');

   }else{
    // document.getElementById("navi").style.backgroundColor= 'transparent'
    someElement.classList.remove('blackNav');
   }

  });

// function Menu(props) {
  
  
//   React.useEffect(() => {
//     const someElement= document.getElementById("navi");
//     console.log(scroll)
//     if(scroll>0){
//       someElement.classList.add('blackNav');
     
//       }else{

//       }
 

//   }, [])

// }
    
  
  return (
    <Layout>
      { isMobile ? <Navbar /> : null }

 {/* Lower quality but faster loading background */}
      {/* <div
        style={{ display: 'grid' }}
      >
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
            height: isMobile ? '40vh' : '100vh',
          }}
          layout="fullWidth"
          placeholder="dominantColor"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={16 / 9}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../images/main_bg.png"
          objectFit={isMobile ? 'cover' : 'contain'}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            display: "grid",
          }}
        >
          { !isMobile ? <Navbar /> : null }
        </div>
      </div> */}
    
      <Background>
        { !isMobile ? <Navbar /> : null }
      </Background>
      <Container>
        <ContentContainer>
          <FeatureBlock style={{ paddingTop: '2rem', marginTop: 0 }}>
            <FeatureElement padding="0 5rem 0 0" style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <FeatureTitle>Convicted</FeatureTitle>
                <p>You go to prison as an ordinary kid. In order to survive in these difficult conditions, you have to fight for the right to life. Fight with other prisoners and if you win you get a well-deserved reward - a cigarette. If you are strong in cooking, go to the kitchen and cook food. Start your journey of roofing business, conquering one prison after another.</p>
                <p>But not all victories are easy, some bosses can't be defeated alone. You'll have to assemble your own team or join someone else's team to kill the most powerful boss. Do not miss the opportunity to keep your physical form at an appropriate level. A convict without a tattoo is not a convict. So put a tattoo on your body - they will increase your credibility among the prisoners.</p>
              </div>
              <SocialLinksRow />
            </FeatureElement>
            <FeatureElement
              style={{
                minHeight: '30.375rem',
                display: 'flex',
                justifyContent: 'center',
                border: '1px solid rgba(43, 43, 43, 1)',
                paddingTop: '2.375rem',
              }}
            >
              <Char />
            </FeatureElement>
          </FeatureBlock>


          <FeatureBlock style={{ marginTop: '7.75rem' }}>
            <FeatureElement
              style={{
                minHeight: '40rem',
                position: 'relative',
              }}
            >
              <Weapons />
            </FeatureElement>
            <FeatureElement padding="2rem 0 0 0">
              <FeatureTitle>About the technical side of the game</FeatureTitle>
              <p>Convicted is an NFT game built on blockchain technology. We use Binance Smart Chain and we want to prove that a good crypto game can easily exist on this blockchain.</p>

              <p>We are faced with several tasks that we want to implement within the framework of this project:</p>


              <p><b>1.Blocking players who use multiple accounts</b><br />We want to create a system for tracking player data with subsequent blocking which is different from the previous ones. To solve this problem, Specialists in the field will be involved to solve this problem, Specialists in the field will be involved to solve this problem</p>

              <p><b>2. Creation of the NFT game on Binance Smart Chain with several internal game tokens</b></p>

              <p><b>3. Creating a stable game economy</b><br />Experts in the field of economics will be invited  to solve this problem</p>

              <p><b>4. Creation of the first NFT game with customization</b><br />In our game, in addition to NFT items that give bonuses, there will be regular character skins and illustrations.</p>
            </FeatureElement>
          </FeatureBlock>
          <FeatureBlock style={{ marginTop: '7.625rem' }}>
            <FeatureElement padding="0 5rem 0 0">
              <FeatureTitle>Game economic</FeatureTitle>
              <p>There are three economic currencies in the game: "Rubles", "Cigarettes", "Food", as well as two resources: "Authority", "Energy" and one indicator "Level".</p>
              <p>All these parameters will interact with each other and create an economic balance. Each currency will be tied to a specific token: Ruble, Cigarettes and Food corresponds to tokens: CRUB (Ruble), CCIG (Cigarettes), CFOD (Food).</p>
              <p>Thus, you can not only mine the game currency you need using NFT, but also buy from the market.</p>
              <div style={{ paddingTop: '1rem' }}>
                <LinkButton borderColor="#282828" color="white" backgroundColor="#1B1A1A" to="/whitepaper">White paper</LinkButton>
              </div>
            </FeatureElement>
            <FeatureElement
              style={{
                minHeight: '26rem',
                position: 'relative',
              }}
            >
              <Schematic />
            </FeatureElement>
          </FeatureBlock>
          <FeatureBlock style={{ marginTop: '8.875rem' }}>
            <FeatureElement
              style={{
                minHeight: '23rem',
                position: 'relative',
              }}
            >
              <Currency />
            </FeatureElement>
            <FeatureElement padding="0 0 0 2.75rem">
              <FeatureTitle>Mining currency</FeatureTitle>
              <p>To mine tokens, you will need to purchase one or several NFTs. They are of 3 types: Weapon, Crime, Chef certificate.</p>

              <p>
                Each type of NFT produces its own specific resource:
                <br />
                Weapon - Cigarettes (CCIG)
                <br />
                Cook Certificate - Food (CFOD)
                <br />
                Crime - Rubles (CRUB)
              </p>

              <p>Although he has basic production parameters, which play a large role, but ultimately the player can develop through active play and get more. In general, we encourage old and active players.</p>


            </FeatureElement>
          </FeatureBlock>
        </ContentContainer>
        <ContentContainer wider>
          <FeatureTitle style={{ textAlign: 'center', marginTop: '10.625rem', marginBottom: '3.25rem' }}>Features available in the game</FeatureTitle>
          <AvailableFeatureContainer>
            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Weapon"
                  src="../images/knuckles.png"
                  style={{ height: "14.125rem", objectFit: "contain" }}
                />
              }
              title="Weapon"
              titleMargin="3.125rem"
              description="Go through prisons one by one and take over the prison business."
            />

            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Prison"
                  src="../images/prison.png"
                  style={{ height: "12.375rem", objectFit: "contain" }}
                />
              }
              title="Prison"
              titleMargin="3.125rem"
              description="Go through prisons one by one and take over the prison business."
            />
            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Kitchen"
                  src="../images/kitchen.png"
                  style={{ height: "15.375rem", objectFit: "contain" }}
                />
              }
              title="Kitchen"
              titleMargin="2.75rem"
              description="If you are a good cook, then send to the kitchen to get “Food”."
            />
            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Bag"
                  src="../images/bag.png"
                  style={{ height: "14rem", objectFit: "contain" }}
                />
              }
              title="Bag"
              titleMargin="2.25rem"
              description="Improve the items in your bag at the expense of “Level” and “Authority”."
            />
            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Tattoo"
                  src="../images/web.png"
                  style={{ height: "18.5rem", objectFit: "contain" }}
                />
              }
              title="Tattoo"
              titleMargin="0"
              description={`Get tattoos to gain the "Authority" in the prison and pump your character.`}
            />
            <AvailableFeatureItem
              image={
                <StaticImage
                  placeholder="blurred"
                  alt="Stashes"
                  src="../images/stamp.png"
                  style={{ width: "13.625rem", objectFit: "contain" }}
                />
              }
              titleMargin="1.625rem"
              title="Stashes"
              description={`Collect various stashes and trade their collections for resources.`}
            />
          </AvailableFeatureContainer>
          <FeatureTitle style={{ textAlign: 'center', marginTop: '10rem' }}>Roadmap</FeatureTitle>
        </ContentContainer>
        <ContentContainer wider>
          <RoadmapContainer>
            <RoadmapItem
              title="Stage 1 (End of Q4 2021)"
              items={[
                'Social networking',
                'Website development for the game'
              ]}
            />
            <RoadmapItem
              title="Stage 2 (Q1 2022)"
              items={[
                'Marketplace launch on BSC Testnet',
                'Launching the beta version of the game on BSC Testnet',
                'Marketplace launch on BSC Mainnet',
                'Selling NFT',
                'Token pre-sale',
              ]}
            />
            <RoadmapItem
              title="Stage 3 (Q2 2022)"
              items={[
                'Launching the first application on a PC',
                '100,000 subscribers (Discord / Twitter / Telegram)',
                'Launching the first application on Android / IOS',
                'Complete redesign of the application in a realistic style, the sale of the first characters and prison cells (cosmetic items)',
              ]}
            />
          </RoadmapContainer>
          <FooterContainer>
            <FooterColumn>
              <Logo src={LogoImage} />
              <Copyright>©2021 by Versegame LLC.</Copyright>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Convicted</FooterTitle>
              <FooterLink to="/">{`Play & earn`}</FooterLink>
              <FooterLink to="/">Marketplace</FooterLink>
              <FooterLink to="/">Registration</FooterLink>
              <FooterLink to="/">Staking</FooterLink>
              <FooterLink to="/">Liquidity</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>Information</FooterTitle>
              <FooterLink to="/">Whitepaper</FooterLink>
              <FooterLink to="/">Roadmap</FooterLink>
              <FooterLink to="/">Getting started</FooterLink>
              <FooterLink to="/">Faq</FooterLink>
              <FooterLink to="/">Privacy policy</FooterLink>
              <FooterLink to="/">{`Terms & conditions`}</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <SocialLinksRow />
              <FooterColumn>
                <FooterTitle capitalize style={{ marginTop: '0.75rem', marginBottom: 0 }}>Support</FooterTitle>
                <FooterHrefLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</FooterHrefLink>
                <FooterTitle capitalize style={{ marginTop: '0.75rem', marginBottom: 0 }}>Partnerships</FooterTitle>
                <FooterHrefLink href={`mailto:${PARTNERSHIPS_EMAIL}`}>{PARTNERSHIPS_EMAIL}</FooterHrefLink>
                <FooterTitle capitalize style={{ marginTop: '0.75rem', marginBottom: 0 }}>Investments</FooterTitle>
                <FooterHrefLink href={`mailto:${INVESTMENTS_EMAIL}`}>{INVESTMENTS_EMAIL}</FooterHrefLink>
              </FooterColumn>
            </FooterColumn>
          </FooterContainer>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
