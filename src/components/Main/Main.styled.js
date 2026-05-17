import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0.7);
    opacity: 0.35;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }
`

export const MainRoot = styled.main`
  width: 100%;
  background-color: #eaeef6;
`

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`

export const Loading = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  gap: 16px;

  @media screen and (max-width: 1200px) {
    min-height: 40vh;
  }
`

export const LoadingDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #565eef;
    animation: ${pulse} 1.2s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`