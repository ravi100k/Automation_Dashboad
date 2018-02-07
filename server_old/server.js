const fs = require('fs');
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const handler_function = require('./handler_function');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/list/:type",(req,res)=>{
	var fileList=[]
	var type= req.params.type;
	console.log(type,"<-fetch data of in server")
  fs.readdirSync(`./server/projects/${type}`).forEach(file => {
    fileList.push(file)
  })
  res.send(fileList);
});

app.post('/execute',(req,res)=>{
	console.log(req.body.fileName,"aaaaaaaaa");
	// handler_function.deleteFolderRecursive()
	exec('sleep 200 && ls', (err, stdout, stderr) => {
  if (err) {
    console.error(err,"yaha hu 1");
    return;
  }
  console.log(stdout,"yaha hu 2");
	res.send(stdout)
	});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up on port '+port);
});

// app.timeout  = 300000;
