const fs = require('fs');
const path = require('path');
const express = require('express');
const { exec,spawn,execFile } = require('child_process');
const handler_function = require('./handler_function');

var socketApi = require('../socketApi');
var io = socketApi.io;

var router = express.Router();

router.get('/list/:type', function(req, res, next) {
  var fileList=[]
	var type= req.params.type;
	console.log(type,"<-fetch data of in server")
  fs.readdirSync(`./server/projects/${type}`).forEach(file => {
    fileList.push(file)
  })
  io.emit('fileList',fileList)
  res.send(fileList);
});

router.post('/execute',(req, res, next)=>{
  console.log(req.body.file_name,"aaaaaaaaa");

	exec('sleep 10 && ls', (err, stdout, stderr) => {
  if (err) {
    return res.end('Error loading ');
  }
    console.log(stdout,"yaha hu");
    io.emit('output',stdout)
    console.log(path.join(__dirname,'../','../server/projects/Jira'));
    handler_function.zip_output(path.join(__dirname,'../','../server/projects/Jira'));
  })

  res.send('execution started')
});
module.exports = router;
