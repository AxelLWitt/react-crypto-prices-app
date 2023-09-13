import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Currencies from './components/Currencies'
import Main from './components/Main'
import Price from './components/Price'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/currencies' element={<Currencies/>}/>
        <Route path='/price/:symbol' element={<Price/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
