const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwtpass = "1234";

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const userDetails = new Admin({
        username: username,
        password: password
    });

    userDetails.save()
    .then(data => res.send("Admin created successfully"))
    .catch(err => res.send("Error creating a Admin"))

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic 
    const username = req.headers.username;
    const password = req.headers.password;

    const isUserInDB = await User.find({username: username, password: password});

    if(isUserInDB){
        const token = jwt.sign({username: username}, jwtpass)
        res.json({
            token,
        })
    }
    res.send("Couldnt Sign In the User");

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    
    const courseData = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });

    courseData.save()
    .then(doc => res.send("Course Saved Successfully"))
    .catch(err => res.send("Course couldnt be saved"));

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.json({
        "all_courses": allCourses
    });

});

module.exports = router;