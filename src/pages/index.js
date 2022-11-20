import React from 'react';
import App from './app';
import WelcomePage from './welcome';
import PageNotFound from './pageNotFound';
import styles from './index.module.css'

import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';


export default function MainPage() {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route index element={<WelcomePage />} /> */}
        <Route path="/" element={<WelcomePage />}/>
        <Route path="facerecog" element={<App />} />
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
};
