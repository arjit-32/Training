<?php include('view/header.php'); ?>

<section id="list" class="list">
    <header>
        <h1>Assignments</h1>
        <form action="." method="get">
            <input type="hidden" name="action" value="list_assignments">
            <select name="course_id" required>
                <option value="0">View All</option>
                <?php foreach ($courses as $course) : ?>
                    <?php if ($course_id == $course['courseId']) { ?>
                        <option value="<?php echo $course['courseId']; ?>" selected>
                        <?php } else { ?>
                        <option value="<?php echo $course['courseId']; ?>">
                        <?php }
                    echo $course['courseName']; ?>
                        </option>
                    <?php endforeach; ?>
            </select>
            <button> Go </button>
        </form>
    </header>
    <?php if ($assignments) {
        foreach ($assignments as $a) : ?>
            <table>
                <th>Assignment name - </th>
                <td>
                    <p> <?php echo $a['courseName']; ?> </p>
                    <p> <?php echo $a['description']; ?> </p>
                </td>
                <th>Action</th>
                <td>
                    <form action="." method="POST">
                        <input type="hidden" name="action" value="delete_assignment">
                        <input type="hidden" name="assignment_id" value="<?php echo $a['id'] ?>">
                        <button>Remove</button>
                    </form>
                </td>
            </table>
        <?php endforeach; ?>
        <br>
    <?php } else { ?>
        <?php if ($course_id) { ?>
            <p>No assignments exist for this course yet</p>
        <?php } else { ?>
            <p>No assignments exist yet</p>
    <?php }
    } ?>
</section>
<section>
    <h2>Add assignments</h2>
    <form action="." method="post">
        <input type="hidden" name="action" value="add_assignment">
        <div>
            <label>Course:</label>
            <select name="course_id" required>
                <option value="">Select</option>
                <?php foreach ($courses as $course) : ?>
                    <option value="<?php echo $course['courseId']; ?>">
                        <?php echo $course['courseName']; ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <label>Description: </label>
            <input type="text" name="description" maxlength="120" placeholder="Description" required>
        </div>
        <div>
            <button>Add</button>
        </div>  
    </form>
</section>
<br>
<p><a href=".?action=list_courses">View/Edit Courses</a></p>
<?php include('view/footer.php'); ?>