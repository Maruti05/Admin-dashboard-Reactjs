import './App.css'
import MainDash from './comonents/MainDash/MainDash';
import RightSide from './comonents/RightSide/RightSide';
import Sidebar from './comonents/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        </div>
    </div>
  );
}

export default App;
