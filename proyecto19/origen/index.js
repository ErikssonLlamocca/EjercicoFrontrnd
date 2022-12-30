const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // se agrega el middleware cors
require('dotenv').config();
const usuariosrouter = require('./routers/usuarios')

const app = express();
//middleware
app.use(express.json());
app.use(cors()); // se aplica el middleware cors
app.use('/api',usuariosrouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});
//mongoDB connection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('connected to MongoDB Atlas'))
.catch((error)=>console.error(error));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
