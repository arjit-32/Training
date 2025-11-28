const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const userDetails = new User({
        username: username,
        password: password
    });

    userDetails.save()
    .then(data => res.send("User created successfully"))
    .catch(err => res.send("Error creating a User"))
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
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course.find()
    .then(data => res.json(data))
    .catch(err => res.send("Error fetching courses"));
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    // const username = req.headers.username; // not a good way, instead get username from token
    const username = req.username;
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;
    const user = await User.findOne({username : username});

    const courseList = user.courseList;

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