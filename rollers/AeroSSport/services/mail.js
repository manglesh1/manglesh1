const nodemailer = require("nodemailer");

//https://forms.gle/JjT1KChguAssvnjX8

// async..await is not allowed in global scope, must use a wrapper
const sendmail = async (req, res, next) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "email-smtp.ca-central-1.amazonaws.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "AKIARBYO3HCNLODELX7B", // generated ethereal user
        pass: "BMWV7HVhaWrgjT5uJRBQtQYn8aLenSuJpN7qeYnp7oM0", // generated ethereal password
      },
    });
    console.log(transporter);
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "partyoakville@aerosportsparks.ca", // sender address
      to: "patelaman885@gmail.com", // list of receivers
      subject: "Feedback & Rating for Aerospots Park", // Subject line
      // replyTo: req.body.email,
      //text: req.message, // plain text body
      html:
        `<p>Hi Aman Patel,` +
        `<br/><br/> Thanks for visiting our park.` +
        `<br/><br/>we wanted to reach out personally and ask for your opinion.` +
        `<br/><br/> What’s your experience like? (e.g., amazing, terrible, etc.` +
        `<br/><br/> We want to be better, and your feedback helps us accomplish that. If you’re willing, it only takes a minute or two.` +
        `<br/><br/> Share your review here https://forms.gle/JjT1KChguAssvnjX8` +
        `<br/><br/><br/> Thanks for your trust,` +
        `<br/>Aerosports Teams`,
    });
    console.log("after send");

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = {
  sendmail,
};

{
  /*  

Hi [name],

Thanks for visiting our [parklocation] park .

I wanted to reach out personally and ask for your opinion.

What’s your experience like? (e.g., amazing, terrible, etc.)

We want to be better, and your feedback helps us accomplish that. If you’re willing, it only takes a minute or two.

Share your review here [link]

Thanks for your trust,
Aerosports Teams
*/
}
