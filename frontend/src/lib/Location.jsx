import axios from "axios";

export default async function CurrentLocation() {
  if (!navigator.geolocation) throw new Error("Geolocation not supported");

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const apiKey = "pk.3a86dbc9e018d8762ff765be4cd2cd18"; // Your real LocationIQ key
          const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;

          const { data } = await axios.get(url);

          resolve({
            latitude: lat,
            longitude: lon,
            address: data.display_name,
          });
        } catch (err) {
          reject("Failed to fetch address");
        }
      },
      (err) => reject(err.message),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  });
}
