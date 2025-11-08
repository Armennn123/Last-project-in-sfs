import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ProductSingle from './pages/ProductSingle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/shop' element={<ShopPage/>}></Route>
      <Route path='/shop/:id' element={<ProductSingle/>}></Route>
    </Routes>
    </BrowserRouter>
      </React.StrictMode>
);

