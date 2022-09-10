/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FormEvent, useState, } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { setSearch, } from '../../features/ad/adSlice';
import { RootState, } from '../../store';
import { Button, } from '../common/Button';
import styles from './Header.module.css';

export function Header() {

  const search = useSelector((state: RootState) => 
    state.search.search);
  const dispatch = useDispatch();

  const [ searchInput, setSearchInput, ] = useState(search);
  
  const setStageFormLocalState = (e:FormEvent) => {
    e.preventDefault();

    dispatch(setSearch(searchInput));
  };
  return (<header className={styles.header}>
    <Link to='/'>
      <h1>
        <strong>Mega</strong>Ogłoszenia
      </h1>
    </Link>
    <Button text='+' type='button' className='addButton' to='/add'/>
    <form className='search' onSubmit={setStageFormLocalState}>
      <input
        type='text'
        value={searchInput}
        onChange={e => 
          setSearchInput(e.target.value)}
        required />
      <Button text='Szukaj' type='submit'/>
    </form>
  </header>
  );
};
