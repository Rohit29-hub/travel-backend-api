const express = require('express')
const router = express.Router();
const userSchema = require('../Models/mongoSubmisionFormSchema');

router.post('/', async (req,res)=>{
    try{
        const user_details = req.body;
        const user_Email_check = await userSchema.findOne({email : user_details.email})
        const user_Phone_check = await userSchema.findOne({phoneNum : user_details.phoneNum})
        if(user_Email_check || user_Phone_check){
            return res.status(403).json({message : 'user already exists !'})
        }else{
            const newUserInfo = new userSchema({
                firstName : user_details.firstname,
                lastName : user_details.lastname,
                email : user_details.email,
                country : user_details.country,
                zipCode : user_details.zipCode,
                city : user_details.city,
                purposeTravel : user_details.purposeTravel,
                phoneNum : user_details.phoneNum,
                destinations : user_details.destinations,
                date : user_details.date,
                budget : user_details.budget,
                message : user_details.message,
            })
            await newUserInfo.save();
            res.status(200).json({ message: 'Information submitted successfully' });
        }
        
    }catch(err){
        console.log('Something is wrong !', err)
    }
})

module.exports = router;