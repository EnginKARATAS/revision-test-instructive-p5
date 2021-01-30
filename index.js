//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({ limit: "1mb" }));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter

//db
const connectionString = 'mongodb+srv://sonaovski:Exo-craft01@cluster0.141km.mongodb.net/revision?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient
//**************************************************************** */
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set("view engine", "pug");
    app.set("views", path.join(__dirname, "views"));

    app.post('/api', (req, res) => {
      quotesCollection.insertOne(req.body)
    })

    app.get('/sa', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(/* ... */)
        .catch(/* ... */)
      res.render('index.ejs', {})
    })
  })
  
  app.get('/', (req, res) => {
    res.render('index', {})

  })
//**************************************************************** */

    // app.get('/', (req, res) => {
    //   res.sendFile(__dirname +'\\public' +'\\indexs.html')

    //   db.collection('quotes').find().toArray()
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {console.log(error)});
    //   // res.sendFile(__dirname + 'index.html')
    // })