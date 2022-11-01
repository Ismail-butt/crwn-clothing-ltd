import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directoryItem.styles'

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem