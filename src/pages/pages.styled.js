import styled from 'styled-components'

export const AuthPageRoot = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #eaedf6;
`

export const AuthCard = styled.section`
  width: 100%;
  max-width: 368px;
  border-radius: 10px;
  background: #fff;
  padding: 44px 40px;
  box-shadow: 0 10px 39px rgba(26, 56, 101, 0.12);

  @media (max-width: 495px) {
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
  }
`

export const Logo = styled.img`
  display: block;
  width: 140px;
  margin: 0 auto 26px;
`

export const AuthTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const AuthInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(148, 166, 190, 0.4);
  background: #f4f5f7;
  color: #000;
  font-size: 14px;

  &::placeholder {
    color: #94a6be;
  }
`

export const PrimaryButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 12px;
  border: 0;
  border-radius: 6px;
  background: #565eef;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #33399b;
  }
`

export const AuthFooter = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #94a6be;
  font-size: 14px;
`

export const NotFoundRoot = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #eaedf6;
`

export const NotFoundCard = styled.section`
  width: 100%;
  max-width: 368px;
  background: #fff;
  border-radius: 10px;
  padding: 44px 40px;
  text-align: center;
  box-shadow: 0 10px 39px rgba(26, 56, 101, 0.12);
  a {
    text-decoration: none;
  }

   @media (max-width: 495px) {
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
  }
`

export const NotFoundCode = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  font-size: 42px;
  font-weight: 700;
  color: #565eef;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: rgba(86, 94, 239, 0.12);
`

export const NotFoundTitle = styled.h1`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 12px;
`

export const NotFoundText = styled.p`
  color: #62718a;
  margin-bottom: 10px;
  font-size: 16px;
`

export const NotFoundHint = styled.p`
  color: #94a6be;
  font-size: 14px;
  margin-bottom: 26px;
`

export const NotFoundActions = styled.div`
  display: flex;
  gap: 10px;

  > * {
    flex: 1;
  }

  ${PrimaryButton} {
    margin-top: 0;
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const SecondaryButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #d8deeb;
  border-radius: 6px;
  background: #fff;
  color: #565eef;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #565eef;
    background: rgba(86, 94, 239, 0.05);
  }
`