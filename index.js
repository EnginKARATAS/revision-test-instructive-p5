//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({ limit: "1mb" }));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter
//---2.3--- post data and recive data
// app.get('/index.html', (req, res) => {
//   res.send('Hello World!')
// })

//db
const connectionString = 'mongodb+srv://sonaovski:Exo-craft01@cluster0.141km.mongodb.net/revision?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient
//**************************************************************** */
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')


 
    quotesCollection.insertOne({"hello":222});

  app.post('/addquestion', (request, response) => {
    console.log("request geldi");
    quotesCollection.insertOne()
  });
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
  })
  
})
//**************************************************************** */

 