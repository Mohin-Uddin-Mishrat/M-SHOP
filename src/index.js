import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components/Navbar'
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <Navbar></Navbar>
      <App />
      <Footer></Footer>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
