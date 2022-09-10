/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState, } from 'react';
import { AdEntity, } from 'types';
import { apiUrl, } from '../../config/config';
import styles from './AddForm.module.css';

export function AddForm() {
  const [ loading, setLoading, ] = useState<true | null>(null);
  const [ ok, setOk, ]=useState<null|string>(null);
  const [ form, setForm, ] = useState({
    name       : '',
    description: '',
    price      : 0,
    address    : '',
    url        : '',
  });
  const updateFrom = (
    key: string, value: string | number
  ) => {
    setForm(formInput => 
      ({
        ...formInput,
        [ key ]: value,
      }));
  };

  const saveAdd = async (e:FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(form.address)}`);
      const geoData = (await geoRes.json())[ 0 ];
      const lat = parseFloat(geoData.lat);
      const lon = parseFloat(geoData.lon);
      const resGeo = await fetch(
        `${apiUrl}/api/ad`, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...form,
            lat,
            lon,
          }),
        }
      );
      const dataGeo:AdEntity = await resGeo.json();
      setOk(dataGeo.id);
    }
    finally {
      setLoading(null);
    }
    
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.add} onSubmit={saveAdd} >
      <form className={styles.addForm}>
        <h1 className={styles.addFormTitle}>Dodaj ogłoszenie</h1> 
        <div className={ styles.addFormInputContainer} >
          <input
            className={styles.addFormInput}
            type='text'
            name='name'
            placeholder='Nazwa'
            required
            maxLength={99}
            value={form.name}
            onChange={ e => 
              updateFrom(
                'name', e.target.value
              )} />
          <label
            htmlFor='name'
            className={styles.addFormLabel} >
                 * Wymagane
          </label>
        </div>
        <div className={ styles.addFormInputContainer} >
          <textarea
            className={styles.addFormTextArea}
            name='description'
            placeholder='Opis'
            required
            value={form.description}
            maxLength={999}
            onChange={ e => 
              updateFrom(
                'description', e.target.value
              )}
          />
          <label
            htmlFor='description'
            className={styles.addFormLabel} >
                 * Wymagane
          </label>
        </div>
        <div className={ styles.addFormInputContainer} >
          <input
            className={`${styles.addFormInputPrefix} ${styles.addFormInput}`}
            type='number'
            name='price'
            placeholder='Cena'
            required
            min={0}
            max={99999}
            step={1}
            value={form.price}
            onChange={ e => 
              updateFrom(
                'price', Number(e.target.value)
              )}    
          />
          <label
            htmlFor='price'
            className={styles.addFormLabel}
            data-prefix='PLN'>
                 * Pozostaw zero w polu aby nie wyświetlać ceny
          </label>
        </div>
        <div className={ styles.addFormInputContainer} >
          <input
            type='url'
            name='url'
            className={styles.addFormInput}
            placeholder='Url'
            required
            maxLength={99}
            value={form.url}
            onChange={ e => 
              updateFrom(
                'url', e.target.value
              )}
          />
          <label
            htmlFor='url'
            className={styles.addFormLabel} >
                 * Wymagane
          </label>
        </div>
        <div className={ styles.addFormInputContainer} >
          <input
            type='text'
            name='address'
            className={styles.addFormInput}
            placeholder='Adres'
            required
            maxLength={99}
            value={form.address}
            onChange={ e => 
              updateFrom(
                'address', e.target.value
              )}
          />
          <label
            htmlFor='address'
            className={styles.addFormLabel} >
                 * Wymagane
          </label>
        </div>
        <button
          type='submit'
          className={styles.addFormBtn}>
              Zapisz
        </button>
      </form >
      
    </div>
  );
};