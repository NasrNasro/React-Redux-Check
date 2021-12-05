import './App.css';
import Addtask from './Components/Addtask';
import Footer from './Components/Footer';
import ListTask from './Components/ListTask';
import Navbarr from './Components/Navbarr';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Addtask></Addtask>
      <ListTask />
      <Footer />
    </div>
  );
}

export default App;
