import './Cardlist.css'
import Card from './Card'
import { NavLink } from 'react-router-dom'

function Cardlist( {locationData} ) {
    return(
    <div className="cardList">
        {
            locationData.map((card) => (
                <NavLink key={card.id} to={"/logement/"+card.id+"/#"}> <Card key={card.id} {...card} /></NavLink>
            ))
        }
    </div>
    )
}
export default Cardlist