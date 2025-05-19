const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes'); // Modification ici

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/jstart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connecté'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes); // Modification ici

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));