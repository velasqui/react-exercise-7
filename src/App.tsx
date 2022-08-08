import './App.css';
import Header from './Components/Header';
import MenuList from './Components/MenuList';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <MenuList>
        <h2>Menu List Children</h2>
      </MenuList>
      <Sidebar />

    </div>
  );
}

export default App;
