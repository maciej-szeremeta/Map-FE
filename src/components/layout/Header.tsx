import React from 'react';
import { Button, } from '../common/Button';

export function Header() {
  return (<header>
    <h1>
      <strong>Mega</strong>Ogłoszenia
    </h1>
    <Button text='Dodaj Ogłoszenie'/>
    <div className='search'>
      <input type='text' />
      <Button text='Szukaj'/>
    </div>
  </header>
  );
};
