import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl      : marker,
  iconRetinaUrl: marker2x,
  shadowUrl    : markerShadow,
  iconSize     : [ 25, 41, ],
  iconAnchor   : [ 12, 41, ],
});

// L.Marker.prototype.options.icon = DefaultIcon;