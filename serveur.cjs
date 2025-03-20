require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db'); // Import de la connexion MongoDB
const cors = require('cors');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import des routes
const userRoutes = require('./route/userRoutes');
const bookRoutes = require('./route/bookRoutes');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Lancement du serveur
const PORT = 4000;
app.listen(PORT, () => console.log(`serveur en ligne sur le port 5500`));

