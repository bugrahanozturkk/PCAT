const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const fs = require('fs');
const app = express();
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoControllers')
const pageController = require('./controllers/pageController')

//Connect DB
mongoose.connect('mongodb+srv://bugrahanozturk:aEVsiQcfeH2PXTde@cluster0.ms137.mongodb.net/pcat-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(()=> {
  console.log('DB CONNECTED !');
}).catch((err)=>{
  console.log(err);
})

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// express static bir middleware(ara yazılım) fonksiyonudur.
// req-res döngüsü içindeki her şey middleware'dir.

// ROUTES
app.get('/', photoController.getAllPhotos);

app.get('/photos/:id', photoController.getPhoto);

app.post('/photos', photoController.createPhoto);

app.put('/photos/:id', photoController.updatePhoto);

app.delete('/photos/:id', photoController.deletePhoto );

app.get('/photos/edit/:id', pageController.getEditPage);

app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
