import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Header, } from './components/layout/Header';
import { Map, } from './components/Map/Map';
import { AddForm, } from './components/AddForm/AddForm';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Map/>} />
          <Route path='/add' element={<AddForm />} />
        </Routes>
      </main>
    </>
  );
}
