const db = require("../db/index")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    db.Admin.exists({username: username, password: password})
        .then(result => {
            if(result){
                next();
            }else{
                res.send("User doesnt exists")
            }
        })
        .catch(err => "Some error occurred" );
}

module.exports = adminMiddleware;