import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import store from './Redux/Store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Navbar></Navbar>
      <App />
      <Footer></Footer>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
