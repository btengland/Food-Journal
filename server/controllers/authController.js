require('dotenv').config()
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')

const {EMAIL, PASSWORD} = process.env

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { email, password, username } = req.body;
        console.log("body: ", req.body)
        const foundUser = await db.check_user(email);
        if(foundUser[0]){
            return res.status(400).send("User already exists. Please login");
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.add_user([email, username, hash]);
      
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username
        }

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
        
        let mailOptions = {
            from: 'IB-Well',
            to: email,
            subject: `Welcome ${username}!`,
            text: `Welcome ${username}, and thank you for joining IB-Well.  We are here to help you on your journey to being a healthy and happy YOU.  All it takes is charting your meals with the preselected food sensitivities and we will show you which pops up most often on your down days.  
            
            If you have any issues, or questions, please let us know by, reaching out and sending a message.
            
            Sincerely,
                The IB-Well Team `
        }
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err)
            }else {console.log('email sent')}
        })

        res.status(200).send(req.session.user)
    },
    login: async(req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        const [foundUser] = await db.check_user([email]);
        if (!foundUser) {
            return res.status(401).send("Incorrect login information");
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if ( authenticated ) {
            req.session.user = {
                userId: foundUser.user_id,
                email: foundUser.email,
                username: foundUser.username
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("Incorrect login information")
        }
    },
    logout: async (req, res) => {
        await req.session.destroy();
        res.sendStatus(200);
    },
    getUserSession: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(401)
        }
    },
    emailMiddleware: (req, res, next) => {
        if(req.body.email.includes("@")){
           return next()
        } else {
            res.status(500).send("invalid email")
        }
    },
    usernameMiddleware: (req, res, next) => {
        if(req.body.username){
            return next()
        } else {
            res.status(502).send("no username")
        }
    }
}