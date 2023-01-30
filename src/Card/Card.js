import './Card.css'


function Card({ title, cover }) {
    return(
    <div className='card'>
        <img className="cardIMG" src={cover} alt={title}></img>
        <p className="cardTitle">{title}</p>
    </div>
    )
}
export default Card