import './App.css';
import './styles/ecomerce.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ITEMS } from './Constants/menuItems';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/itemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './container/itemDetailContainer/ItemDetailContainer';
import { store } from './store/store';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar
            menuItems={ITEMS}
          />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/*' element={<Navigate to={'/'} replace />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </Provider>
  );
}

export default App;
