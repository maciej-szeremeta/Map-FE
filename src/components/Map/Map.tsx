import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icons';

export function Map() {
  return (
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
  );
};