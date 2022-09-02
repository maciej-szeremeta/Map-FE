import React from 'react';

export function Header() {
  return (<header>
    <h1 className='map'><strong>Mega</strong>Ogłoszenia</h1>
    <button type='button'>Dodaj Ogłoszenie</button>
    <div className='search'>
      <input type='text' />
      <button type='button'>Szukaj</button>
    </div>
  </header>
  );
};
