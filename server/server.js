const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu-email@gmail.com',
    pass: 'sua-senha'
  }
});

app.post('/api/localizacao', (req, res) => {
  const { latitude, longitude } = req.body;

  // Configurar o e-mail
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Localização do Usuário',
    text: `Latitude: ${latitude}, Longitude: ${longitude}`
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('E-mail enviado: ' + info.response);
    res.status(200).send('Localização enviada com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
