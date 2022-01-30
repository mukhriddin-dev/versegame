import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import DiscordImage from '../images/social/discord.svg'
// @ts-ignore
import TelegramImage from '../images/social/telegram.svg'
// @ts-ignore
import TwitterImage from '../images/social/twitter.svg'
// @ts-ignore
import GithubImage from '../images/social/github.svg'
// @ts-ignore
import FacebookImage from '../images/social/facebook.svg'
import { DISCORD_LINK, FACEBOOK_LINK, GITHUB_LINK, TELEGRAM_LINK, TWITTER_LINK } from '../constants'

const Container = styled.div`
  display: flex;

  @media(max-width: 768px) {
    justify-content: center;
    margin: 1rem 0;
  }
`

const SocialLink = styled.a<{ last?: boolean }>`
  margin-right: ${({ last }) => last ? '0' : '1rem'};
`

const SocialImage = styled.img`
  width: 2.375rem;
  height: 2.375rem;
`

const SocialLinksRow = () => {
  return (
    <Container>
      <SocialLink href={DISCORD_LINK} target="_blank">
        <SocialImage src={DiscordImage} />
      </SocialLink>
      <SocialLink href={TWITTER_LINK} target="_blank">
        <SocialImage src={TwitterImage} />
      </SocialLink>
      <SocialLink href={TELEGRAM_LINK} target="_blank">
        <SocialImage src={TelegramImage} />
      </SocialLink>
      <SocialLink href={FACEBOOK_LINK} target="_blank">
        <SocialImage src={FacebookImage} />
      </SocialLink>
      <SocialLink href={GITHUB_LINK} target="_blank" last>
        <SocialImage src={GithubImage} />
      </SocialLink>
    </Container>
  )
}

export default SocialLinksRow
