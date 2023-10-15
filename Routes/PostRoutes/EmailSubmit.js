const express = require('express');
const router = express.Router();
const UserEmail = require('../../Models/mongoUserEmailSchema');
const emailSender = require('../../Controller/SendMail')

router.post('/', async (req, res) => {
    try {
        const userEmail = req.body.email;
        const existingUserEmail = await UserEmail.findOne({ email: userEmail });
        if (existingUserEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        } else {
            const newUserEmail = new UserEmail({
                email: userEmail,
            });
            await newUserEmail.save();
        }
        res.status(200).json({ message: 'Email submitted successfully' });

        // email send
        req.userEmail = userEmail;
        emailSender(req,res , () =>{
            console.log('running fine !')
        })
    } catch (error) {
        console.error('Error saving user email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;