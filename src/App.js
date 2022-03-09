import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const menuItems=[{id:1,name:'C#'},{id:2,name:'Java'},{id:3,name:'React.js'}]

  return (
    <div className="App" >
        <NavBar
          menuItems={menuItems}
        />
      
    </div>
  );
}

export default App;
