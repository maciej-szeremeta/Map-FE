/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FormEvent, useState, } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { setSearch, } from '../../features/ad/adSlice';
import { RootState, } from '../../store';
import { Button, } from '../common/Button';

export function Header() {

  const search = useSelector((state: RootState) => 
    state.search.search);
  const dispatch = useDispatch();

  const [ searchInput, setSearchInput, ] = useState(search);
  
  const setStageFormLocalState = (e:FormEvent) => {
    e.preventDefault();

    dispatch(setSearch(searchInput));
  };
  return (<header>
    <h1>
      <strong>Mega</strong>Ogłoszenia
    </h1>
    <Button text='Dodaj Ogłoszenie' type='button'/>
    <form className='search' onSubmit={setStageFormLocalState}>
      <input type='text' value={searchInput} onChange={e => 
        setSearchInput(e.target.value)} />
      <Button text='Szukaj' type='submit'/>
    </form>
  </header>
  );
};
