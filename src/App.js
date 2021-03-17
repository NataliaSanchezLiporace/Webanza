import './App.css'; 
import { NavBar } from './components/navbar';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
