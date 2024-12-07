import logo from './logo.svg';
import './App.css';
import { First } from './pages/First';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<First></First>}></Route>
      </Routes>
    </div>
  );
}

export default App;