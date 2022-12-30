const express = require('express');
const usuariosSchema = require('../models/usuarios');
const router = express.Router();



//CREATE USUARIOS
router.post('/usuarios',(req,res)=>{
   const usuario= usuariosSchema(req.body);
   usuario
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//GET ALL USUARIOS
router.get('/usuarios',(req,res)=>{
  
   usuariosSchema
   .find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//GET A USUARIO
router.get('/usuario/:id',(req,res)=>{
   const {id} = req.params;
  
   usuariosSchema
   .findById(id)
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//UPDATE A CLIENTE
router.put('/usuarios/:id',(req,res)=>{
   const {id} = req.params;
   const {nombre,correo,usuario,contraseña}= req.body;
   usuariosSchema
   .updateOne({_id: id},{$set: {nombre,correo,usuario,contraseña} })
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});


//DELETE A USUARIO
router.delete('/usuarios/:id',(req,res)=>{
   const {id} = req.params;
   
   usuariosSchema
   .remove({_id: id})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});


// POKEMON FAVORITES
//GET ALL FAVORITES FOR A USER
router.get('/usuarios/:id/favoritos',(req,res)=>{
   const {id} = req.params;
   usuariosSchema
   .findById(id)
   .then((user)=>res.json(user.favoritos))
   .catch((error)=>res.json({message:error}));
});

// BORRAR UN POKEMON DE LA LISTA DE FAVORITOS DEL USUARIO
router.delete('/usuarios/:id/favoritos/:pokemon',(req,res)=>{
   const {id, pokemon} = req.params;
   usuariosSchema
   .findById(id)
   .then((user)=>{
       // Remove the pokemon from the user's favorites array
       const updatedFavorites = user.favoritos.filter(favoritePokemon => favoritePokemon !== pokemon);
       // Update the user's document with the new favorites array
       usuariosSchema.updateOne({_id: id}, {$set: {favoritos: updatedFavorites}})
       .then((data)=>res.json(data))
       .catch((error)=>res.json({message:error}));
   })
   .catch((error)=>res.json({message:error}));
});


//VERIFICAR SI EXISTE EL USUARIO Y CONTRASEÑA DEVUELVE FALSE SI NO EXISTE Y SI EXISTE DEVUELVE EL ID

router.post('/login', (req, res) => {
   const { usuario, contraseña } = req.body;
 
   // Busca un usuario con el nombre de usuario y la contraseña especificados
   usuariosSchema.findOne({ usuario, contraseña }, (error, usuario) => {
     if (error) {
       // Si hay un error, envía un mensaje de error
       res.json({ message: error });
     } else {
       if (usuario) {
         // Si se encontró un usuario, devuelve el ID del usuario como token de autenticación
         res.json({ token: usuario._id });
       } else {
         // Si no se encontró ningún usuario, envía un valor false
         res.json({ token: false });
       }
     }
   });
 });
 //AGREGAR UN POKEMON A FAVORITOS DEL USUARIO
router.post('/usuarios/:id/favoritos/:pokemon', (req, res) => {
   const { id, pokemon } = req.params;
   usuariosSchema
     .findById(id)
     .then((user) => {
       // Add the Pokemon to the user's favorites array
       user.favoritos.push(pokemon);
       // Save the updated user document
       user.save().then((updatedUser) => res.json(updatedUser))
       .catch((error) => res.json({ message: error }));
     })
     .catch((error) => res.json({ message: error }));
 });
 
 module.exports = router;