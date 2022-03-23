import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEMS } from './Constants/menuItems';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './components/container/itemListContainer/ItemListContainer';
import './components/styles/ecomerce.css'

function App() {

  return (
    <div className="App" >
      <NavBar
        menuItems={ITEMS}
      />
      <ItemListContainer
      />
    </div>
  );
}

export default App;
