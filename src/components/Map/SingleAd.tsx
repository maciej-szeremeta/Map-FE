import React, { useEffect, useState, } from 'react';
import { AdEntity, } from 'types';
import { apiUrl, } from '../../config/config';

interface Props{
   id: string
}

export function SingleAd({ id, }: Props) {
  const [ ad, setAd, ] = useState<AdEntity|null>(null);
  useEffect(
    () => { 
      (async () => { 
        const res = await fetch(`${apiUrl}/api/ad/${id}`);
        const data = await res.json();
        setAd(data);
      })();
    }, [ id, ]
  );
  if (!ad) {
    return <p>Wczytywanie....</p>;
  }
  return (
    <>
      <h1>{ ad.name }</h1>
      <p>{ ad.description }</p>
      <p>{ ad.price }</p>
      <a href={ad.url } target='_blank' rel='noreferrer'>Ogłoszenie</a>
    </>
  );
};
