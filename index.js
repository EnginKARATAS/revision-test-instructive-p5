//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
const nunjucks = require('nunjucks')

app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({ limit: "1mb" }));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter

nunjucks.configure('views',{
  autoescape: true,
  express: app
})



//***DB*********************************************************** */
const connectionString = 'mongodb+srv://sonaovski:Exo-craft01@cluster0.141km.mongodb.net/revision?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.post('/api', (req, res) => {
      quotesCollection.insertOne(req.body)
    })

    app.get('products',(req,res)=>{
      db.collection('quotes').find().toArray()
      .then(dbdata => {
        res.send(dbdata)
      })
    })

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results => {
          res.render('index.html')
        })
    })

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