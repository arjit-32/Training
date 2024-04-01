const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const userDetails = new User({
        username: username,
        password: password
    })

    userDetails.save()
        .then(data => res.send("User created successfully"))
        .catch(err => res.send("Error creating user"))

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({})

    res.json({
        allCourses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const user = await User.updateOne(
        { username: username},
        { 
            "$push": 
            { courseList: courseId }
        }
        );
    
    res.json({
        updatedUser: user
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({username: username})
    
    courseList = user.courseList;

    const allPurchasedCourses = await Course.find(
        {
            '_id': {
                $in: courseList
            }
        }
    );
    res.json({
        "purchasedCourses": allPurchasedCourses
    })
});

module.exports = router