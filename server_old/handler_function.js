const nodemailer = require('nodemailer');
const archiver = require('archiver');
const fs = require('fs');

  function zip_output(path) {
    var output = fs.createWriteStream('output.zip');
    var archive = archiver('zip');

    output.on('close', ()=> {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error',(err)=>{
      throw err;
    });

    archive.pipe(output);
    // archive.bulk([
    //   { expand: true, cwd: 'automation_dashboard', src: ['**'], dest: 'server/Jira/Jira 1'}
    // ]);
    archive.directory(path)//set path from working dir
    archive.finalize();
  }

//  Mail handler function
   email_function = async (subject,body) => {
    var zip_file = await zip_output()//'server/projects/Jira/Jira 1/a/b'
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
          host: 'mailhost.ea.com',
          port: 25,
          secure: false, // true for 465, false for other ports
          auth: {
              user: 'ravkumar@contractor.ea.com', // generated ethereal user
              pass: 'Chotu@12345'  // generated ethereal password
          }
      });
      let mailOptions = {
          from: 'ravkumar@contractor.ea.com', // sender address
          to: 'rranjan@contractor.ea.com', // list of receivers
          subject: subject, // Subject line
          text: body, // plain text body
          attachments:[{filename:'output.zip',path: './output.zip'}]
      };
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
      });
    });
  }

// folder deleted function
function deleteFolderRecursive(path) {
  // var path = 'server/projects/Jira/Jira 1'
  console.log("deleteing");
  console.log(fs.existsSync(path));
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index)=>{
      console.log(file);
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
    }
  else{
    return "No Dir Found"
  }
  }

module.exports = {deleteFolderRecursive,email_function};
