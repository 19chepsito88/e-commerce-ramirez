import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEMS } from './Constants/menuItems';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './container/itemListContainer/ItemListContainer';
import './styles/ecomerce.css'
import Cart from './components/Cart';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar
        menuItems={ITEMS}
      />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
