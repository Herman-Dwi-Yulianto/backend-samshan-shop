import db from "../db";

export const register = (req,res) => {

    //Checking existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.name], (err,data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exist!");

        //Hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcryps.hashsync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)" 

        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err,data) => {
            if(err) return res.json(err);
            return res.status(200).json("Users has been added succesfully");
        })
    })
}

export const login = (req,res) => {
    
}

export const logout = (req,res) => {
    
}