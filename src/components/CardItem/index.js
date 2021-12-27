// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {imgUrl, description, title, className} = cardDetails
  return (
    <li className={`${className} each-card-container`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
