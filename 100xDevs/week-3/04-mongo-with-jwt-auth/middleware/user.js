function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtpass);

    const username = decoded.username;
    if(username){
        req.username = username;
        next()
    }else{
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }

}

module.exports = userMiddleware;