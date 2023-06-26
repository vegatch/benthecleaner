const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());


let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
   clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
 },
});


transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});





app.post("/send", function (req, res) {
 
let message = {
  from: `${req.body.messageState.client_name}`,
  phone: `${req.body.messageState.phone_number} `,
  email: `${req.body.messageState.client_email}`,
  text: `${req.body.messageState.message}`,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.messageState.client_email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.messageState.client_name} from Benskya's contact form`,
   text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
   html:`<p>Name: ${message.from}<p/>
         <p>Phone: ${message.phone}<p/>
         <p>Email: ${message.email}<p/>
         Message: <p>${message.text}<p/>  
         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});


 