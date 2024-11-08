import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import { Place } from '../types';

const places: Place[] = [
  {
    id: '1',
    name: 'University Library',
    category: 'library',
    coordinates: [51.505, -0.09],
    description: '24/7 study space with quiet zones'
  },
  {
    id: '2',
    name: 'Student Cafe',
    category: 'cafe',
    coordinates: [51.506, -0.091],
    description: 'Coffee and snacks'
  },
  // Add more places as needed
];

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[600px] rounded-xl overflow-hidden"
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map((place) => (
          <Marker key={place.id} position={place.coordinates}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{place.name}</h3>
                <p className="text-sm text-gray-600">{place.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
};

export default Map;