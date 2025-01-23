document.addEventListener('DOMContentLoaded', (event) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Exibir a localização na página
      document.getElementById('latitude').textContent = `Latitude: ${latitude}`;
      document.getElementById('longitude').textContent = `Longitude: ${longitude}`;
    }, function(error) {
      console.error('Erro ao obter localização:', error);
    });
  } else {
    console.log("Geolocalização não é suportada por este navegador.");
  }
});
