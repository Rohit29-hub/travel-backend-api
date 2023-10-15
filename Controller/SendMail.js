const nodemailer = require('nodemailer')
const senderEmail = "icoder@rohittttt.online";
const sendMail = async (req, res,next) => {
    const user_email = req.userEmail;
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        auth: {
            user: 'icoder@rohittttt.online',
            pass: 'Rohitk29@2005'
        }
    });
    
    try{
        const info = await transporter.sendMail({
            from: `${senderEmail}`, // sender address
            to: `${user_email}`, // list of receivers
            subject: "Travel Agency Roaming roadsters", // Subject line
            text: "Thnx for using roaming roadsters ! Happy Travel", // plain text body
            html: "<h1>Make your trip <br/> <a href='https://www.roamingroadsters.com' target='__blank'>https://www.roamingroadsters.com</a><h1>", // html body
        });

        console.log(senderEmail, " is send a Message ! and this is a email : ", user_email)
        next();
    }catch(err){
        res.send(err)
    }
}

module.exports = sendMail;