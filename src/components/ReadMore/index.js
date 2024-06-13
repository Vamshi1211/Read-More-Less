import {useState} from 'react'
import {
  BgContainer,
  MainContainer,
  MainHeading,
  MainDes,
  ReactImage,
  DescriptionContainer,
  ReactDes,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readClicked, onReadClicked] = useState(false)

  const onClickRead = () => {
    onReadClicked(prevState => !prevState)
  }

  return (
    <BgContainer>
      <MainContainer>
        <MainHeading>React Hooks</MainHeading>
        <MainDes>Hooks are a new addition to react</MainDes>
        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <DescriptionContainer>
          <ReactDes>
            {readClicked
              ? reactHooksDescription
              : reactHooksDescription.slice(0, 170)}
          </ReactDes>
          <ReadButton onClick={onClickRead}>
            {readClicked ? 'Read Less' : 'Read More'}
          </ReadButton>
        </DescriptionContainer>
      </MainContainer>
    </BgContainer>
  )
}

export default ReadMore
