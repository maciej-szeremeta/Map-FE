import React, { useEffect, useState, } from 'react';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icons';
import { useSelector, } from 'react-redux';
import { SimpleAdEntity, } from 'types';
import type { RootState, } from '../../store';
import { SingleAd, } from './SingleAd';

export function Map() {
  const searchAd = useSelector((state: RootState) =>
    state.search.search);
  const [ ads, setAds, ] = useState<SimpleAdEntity[]>([]);
  
  useEffect(
    () => {
      (async () => { 
        const res = await fetch(`http://localhost:3001/api/ad/search/${searchAd}`);
        const data = await res.json();
        setAds(data);
      })();
    }, [ searchAd, ]
  );
  return (<div>
    <div>
      <MapContainer center={[ 50.2657152, 18.9945008, ]} zoom={13}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='OpenStreetMap' />
        {ads.map(ad => 
          (
            <Marker position={[ ad.lat, ad.lon, ]} key={ad.id}>
              <Popup>
                <SingleAd id={ ad.id}/>
              </Popup>
            </Marker>
          ))}
   
      </MapContainer>
    </div>
  </div>
  );
};