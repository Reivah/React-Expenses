import './Card.css'
const Card = props => {
    const cardBox = 'card-box ' + props.className
    return (
        <div className={cardBox}>{props.children}</div>
    )
}

export default Card