import Banner from '../Home/Banner/Banner'
import Cardlist from '../Home/Card/Cardlist';
import locationData from '../../Assets/logements.json'


function Home() {

return (
    <div>
    
    <Banner />
    <Cardlist  locationData={locationData} />
    
    </div>
  );
}
export default Home