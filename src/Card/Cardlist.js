import './Cardlist.css'
import Card from './Card'

function Cardlist( {locationData} ) {
    return(
    <div className="cardList">
        {
            locationData.map((card) => (
                <Card key={card.id} {...card} />
            ))
        }
    </div>
    )
}
export default Cardlist