import { Admin } from "../models/admin_model.js";
import { ApiError } from "../utils/ApiError.js";
import { Apisucess } from "../utils/ApiSuccess.js";

export const adminLogin = async (req, res) => {
    try {


        const { username, password } = req.body;

        const exitingiuser = await Admin.findOne({
            $and: [
                { username: username.toLowerCase() },
                { password: password.toLowerCase() }
            ]
        });

        if (!exitingiuser) {


            return res
                .status(400)
                .json(
                    ApiError({
                        message: "Invalid Credentials",
                        success: false,
                        data: []
                    }));

        };

        //console.log('exiting user is ', exitingiuser?.username, exitingiuser?.password);

        //console.log(exitingiuser.toObject());

        return res
            .status(200)
            .json(
                Apisucess({
                    message: 'Login Succesfully',
                    success: true,
                    data: exitingiuser.username
                }));


    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }

};


