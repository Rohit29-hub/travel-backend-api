const express = require('express');
const router = express.Router();
const userContactInfo = require('../../Models/mongoContactUserSchema');

router.post('/', async (req, res) => {
    try {
        const user_data = req.body;
        const existingUser_details_email = await userContactInfo.findOne({ email: user_data.email });
        const existingUser_details_phoneNum = await userContactInfo.findOne({ phoneNum: user_data.phonenum });
        if (existingUser_details_email || existingUser_details_phoneNum) {
            return res.status(403).json({ error: 'Information already exists' });
        } else {
            const newUserInfo = new userContactInfo({
                firstName: user_data.firstname,
                lastName: user_data.lastname,
                email: user_data.email,
                phoneNum: user_data.phonenum,
                message: user_data.message
            });
            await newUserInfo.save();
        }
        res.status(200).json({ message: 'Information submitted successfully' });
    } catch (error) {
        console.error('Error saving user information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
