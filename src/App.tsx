import React from 'react';
import './App.css';
import { Header, } from './components/layout/Header';
import { Map, } from './components/Map/Map';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Map/>
      </main>
    </>
  );
}
