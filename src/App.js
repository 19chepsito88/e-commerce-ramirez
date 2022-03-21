import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEMS } from './Constants/menuItems';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './components/container/itemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';
import './components/styles/ecomerce.css'

function App() {
  const productos = [
    { id: 1, title: 'Escaleras', picture: 'escalera' },
    { id: 2, title: 'Palas', picture: 'pala' }
  ]
  return (
    <div className="App" >
      <NavBar
        menuItems={ITEMS}
      />
      <ItemListContainer
       
      />
      <ItemCount
        initial={1}
        stock={5}
      />
    </div>
  );
}

export default App;
