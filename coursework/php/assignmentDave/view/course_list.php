<?php include('view/header.php') ?>
<section>
    <h2>Course List</h2>
    <?php if ($courses) {
        foreach ($courses as $course) :
    ?>
            <div>
                <div>
                    <p><?php echo $course['courseName']; ?></p>
                </div>
                <div>
                    <form action="." method="post">
                        <input type="hidden" name="action" value="delete_course">
                        <input type="hidden" name="course_id" value="<?php echo $course['courseId']; ?>">
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        <?php endforeach;
    } else { ?>
        <p>No courses exist</p>
    <?php } ?>
</section>
<section>
    <h2>Add course</h2>
    <form action="." method="post">
        <input type="hidden" name="action" value="add_course">
        <div>
            <label>Name</label>
            <input type="text" name="course_name" maxlength="50" placeholder="Name" autofocus required>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
</section>
<p><a href=".">View &amp; Add assignments</a></p>
<?php include('view/footer.php') ?>