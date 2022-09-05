import React, { useEffect, } from 'react';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icons';
import { useSelector, } from 'react-redux';
import type { RootState, } from '../../store';

export function Map() {
  const searchAd = useSelector((state: RootState) =>
    state.search.search);
  
  useEffect(
    () => {
      console.log('aktualizacja stanu');
    }, [ searchAd, ]
  );
  return (<div>
    <h1>{ searchAd }</h1>
    <div>
      <MapContainer center={[ 50.2657152, 18.9945008, ]} zoom={13}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='OpenStreetMap'/>
        <Marker position={[ 50.2657152, 18.9945008, ]} >
          <Popup>
            <h2>Super Firma</h2>
          </Popup>
        </Marker>    
      </MapContainer>
    </div>
  </div>
  );
};