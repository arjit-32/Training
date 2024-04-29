const jwtpass = "1234";
const jwt = require('jsonwebtoken');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtpass);
    const username = decoded.username;
    if(username){
        next()
    }else{
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
}

module.exports = adminMiddleware;