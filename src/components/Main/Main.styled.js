import styled from 'styled-components'

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
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 1200px) {
    min-height: 40vh;
  }
`