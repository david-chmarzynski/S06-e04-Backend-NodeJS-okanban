const mongoose = require('mongoose');
const {USER, PASSWORD, COLLECTION} = require('../config/config');
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0-gfvr6.gcp.mongodb.net/${COLLECTION}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à la BDD réussie'))
  .catch(err => console.log(err));