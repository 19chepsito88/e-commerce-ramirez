import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import {ITEMS} from './Constants/menuItems';

function App() {
  return (
    <div className="App" >
        <NavBar
          menuItems={ITEMS}
        />
        <ItemListContainer
          title={'Contenedor Provisional'}
        />
    </div>
  );
}

export default App;
