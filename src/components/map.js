import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../fixLeaffletIcons';

const UserMap = ({ users, selectedUser }) => {
  const center = useMemo(() => {
    const usersToConsider = selectedUser ? [selectedUser] : users;
    if (usersToConsider.length === 0) return [0, 0];
    if (usersToConsider.length === 1) {
      return [parseFloat(usersToConsider[0].address.geo.lat), parseFloat(usersToConsider[0].address.geo.lng)];
    }
    const latitudes = usersToConsider.map(user => parseFloat(user.address.geo.lat));
    const longitudes = usersToConsider.map(user => parseFloat(user.address.geo.lng));
    const avgLat = latitudes.reduce((acc, lat) => acc + lat, 0) / latitudes.length;
    const avgLng = longitudes.reduce((acc, lng) => acc + lng, 0) / longitudes.length;
    return [avgLat, avgLng];
  }, [users, selectedUser]);

  const usersToShow = selectedUser ? [selectedUser] : users;
  console.log(center);

  return (
    <div className="flex map">
      <MapContainer center={center} zoom={selectedUser ? 10 : 2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
        usersToShow.map(user => (
          <Marker
            key={user.id}
            position={[parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)]}
          >
            <Popup>
              <div>
                <h3>{user.name}</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserMap;
