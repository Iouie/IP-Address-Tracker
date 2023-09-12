import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function EntireMap({ getLocation }) {
  const { location } = getLocation;

  const customIcon = new Icon({
    iconUrl: "src/assets/icon-location.svg",
    iconSize: [40, 50],
  });

  const Loaded = () => {
    if (!location) {
      return <div>Loading...</div>;
    }
    return (
      <MapContainer center={[location.lat, location.lng]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            This is the location
            <br />
            of the IP Address.
          </Popup>
        </Marker>
      </MapContainer>
    );
  };

  return <Loaded />;
}
