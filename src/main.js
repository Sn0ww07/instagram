if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Enviar a localização para o servidor
    enviarLocalizacao(latitude, longitude);
  });
} else {
  console.log("Geolocalização não é suportada por este navegador.");
}

function enviarLocalizacao(latitude, longitude) {
  fetch('http://localhost:3000/api/localizacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Localização enviada com sucesso:', data);
  })
  .catch((error) => {
    console.error('Erro ao enviar localização:', error);
  });
}
