const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://bonisigoubenjamin:boni1996@benjamin.feide.mongodb.net/')
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.log("❌ Erreur de connexion MongoDB :", err));

module.exports = mongoose;

