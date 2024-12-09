import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { Products } from './pages/Products';
import { First } from './pages/First';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { useState } from 'react';
import { Order } from './pages/Order';
import { ErrorPage } from './pages/ErrorPage';
import Details from './pages/Details';


function App() {
  const [order , setOrder] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<First></First>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}></Checkout>}></Route>
        <Route path='/order_confirm' element={<Order order={order}></Order>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
