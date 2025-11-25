import { Admin } from "../models/admin_model.js";

export const adminLogin = async (req, res) => {
    try {

        // const perviosuuser = await Admin.find();

        // console.log('all user are this', perviosuuser);


        const { username, password } = req.body;

        const exitingiuser = await Admin.findOne({
            $and:[
                {username : username.toLowerCase()},
                {password : password.toLowerCase()}
            ]
        });

        if(!exitingiuser){
            
            
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
            
        };
        console.log('exiting user is ', exitingiuser?.username, exitingiuser?.password);

         
       

        // if (exitingiuser.password !== password) {
        //     return res.status(400).json({ success: false, message: 'INvalid Credentials' });
        // }



        return res.status(200).json({ success: true, message: " Login Succesfully" });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }

};


