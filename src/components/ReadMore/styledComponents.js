import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
    box-shadow: none;
  }
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #1e293b;
  margin-bottom: 0px;
`

export const MainDes = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #334155;
  text-align: center;
`
export const ReactImage = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const ReactDes = styled.p`
    color: #334155;
    font-family: "Roboto"
    font-size: 18px;
   
`
export const ReadButton = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  cursor: pointer;
  padding: 8px 24px 8px 24px;
  outline: none;
  border-radius: 8px;
  margin-top: 20px;
  align-self: center;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`
