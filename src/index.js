import React from 'react';
import ReactDOM from 'react-dom/client';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import './style.css';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';
import Blog6 from './Blog6';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App />
    //<Blog1/>
    //<Blog2/>
    //<Blog3/>
    //<Blog4/>
    //<Blog5/>
    //<Blog6/>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Blog2/>}/>
        <Route path='/plus1' element={<Blog3/>}/>
        <Route path='/plus2' element={<Blog4/>}/>
        <Route path='/plus3' element={<Blog5/>}/>
        <Route path='/plus4' element={<Blog6/>}/>
    </Routes>
   </BrowserRouter>
);


