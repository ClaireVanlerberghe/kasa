
import Header from '../Header/Header';
import '../App/App.css';
import Banner from '../Banner/Banner'
import Cardlist from '../Card/Cardlist';
import locationData from '../Assets/logements.json'
import Footer from '../Footer/Footer';

function App() {

return (
    <div>
    <Header />
    <Banner />
    <Cardlist  locationData={locationData} />
    <Footer />
    </div>
  );
}

export default App;
