import React, { useEffect, } from 'react';
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icons';
import { useSelector, } from 'react-redux';
import { SimpleAdEntity, } from 'types';
import { useQuery, } from 'react-query';
import { apiUrl, } from '../../config/config';
import type { RootState, } from '../../store';
import { SingleAd, } from './SingleAd';

export function Map() {
  const searchAd = useSelector((state: RootState) =>
    state.search.search);

  const fetchAdsList = async () => {
    const res = await fetch(`${apiUrl}/api/ad/search/${searchAd}`);
    if (res.status === 404) {
      throw new Error('Fetching ad list failed');
    }
    else {
      const data = await res.json();
      return data;
    }
    
  };
  const { data:ads, error, refetch, isLoading, isError, } = useQuery<SimpleAdEntity[], Error>(
    'ads', fetchAdsList, { refetchOnMount: true, }
  );

  useEffect(
    () => { refetch(); }, [ refetch, searchAd, ]
  );
  if (isLoading) {
    return <span style={{ fontSize: '36px', color: 'black', }}>Loading...</span>;
  }
  if (isError) {
    return <span style={{ fontSize: '36px', color: 'black', }}>Error: {error.message}</span>;
  }
  return (<div>
    <div>
      <MapContainer center={[ 50.2657152, 18.9945008, ]} zoom={13}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='OpenStreetMap' />
        {ads?.map(ad => 
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