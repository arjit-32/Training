const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const adminDetails = new db.Admin({
        username: username,
        password: password
    })

    adminDetails.save()
    .then(data => res.send("Admin created successfully"))
    .catch(err => res.send("Error creating a Admin"));
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {id, title, description, price, imageLink} = req.body;

    const courseDetails = new db.Course({
        id: id,
        title: title,
        description: description,
        price: price,
        imageLink: imageLink  
    })

    courseDetails.save()
        .then(data => res.send("Course created successfully"))
        .catch(err => res.send("Error creating course"))
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await db.Course.find({});
    console.log(allCourses);
     res.json({
        allCourses: allCourses,
    });
});

module.exports = router;