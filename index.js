//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({limit:"1mb"}));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter 
//---2.3--- post data and recive data 
// app.get('/index.html', (req, res) => {
//   res.send('Hello World!')
// })

var Datastore = require('nedb'), db = new Datastore({filename : 'database'});
db.loadDatabase();

app.post('/api', (request, response) => {
  console.log("request geldi");
  db.insert(request.body);
});

app.get('/sa', (req, res) => {
  db.find({questionPool:"asda"}, function (err,docs){ 
    res.send('H e l l o - W o r l d !'+docs.questionPool)

  });
})