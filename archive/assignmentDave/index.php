<!-- Search by category not working -->


<?php
require('model/database.php');
require('model/assignments_db.php');
require('model/courses_db.php');


$assignment_id = isset($_POST['assignment_id']) ? $_POST['assignment_id'] : null;
$description = isset($_POST['description']) ? $_POST['description'] : null;
$course_name = isset($_POST['course_name']) ? $_POST['course_name'] : null;
$course_id = isset($_POST['course_id']) ? $_POST['course_id'] : (isset($_GET['course_id']) ? $_GET['course_id'] : null);

$action = isset($_POST['action']) ? $_POST['action'] : (isset($_GET['action']) ? $_GET['action'] : "list_assignments");

switch ($action) {
    case "list_courses":
        $courses = get_courses();
        include('view/course_list.php');
        break;
    case "add_course":
        add_course($course_name);
        header('Location: .?action=list_courses');
        break;
    case "add_assignment":
        if ($course_id && $description) {
            add_assignment($course_id, $description);
            header("Location: .?course_id=$course_id");
        } else {
            $error = "Invalid Assignment data. Check all fields and try";
            include($_SERVER['DOCUMENT_ROOT'] . 'view/error.php');
            exit();
        }
        break;
    case "delete_course":
        if ($course_id) {
            try {
                delete_course($course_id);
            } catch (PDOException $e) {
                $error = "You cannot delete a course if assignments exist in the course.";
                include($_SERVER['DOCUMENT_ROOT'] . 'view/error.php');
                exit();
            }
            header("Location: .?action=list_courses");
        }
        break;
    case "delete_assignment":
        if ($assignment_id) {
            delete_assignment($assignment_id);
            header("Location: .?course_id=$course_id");
        } else {
            $error = "Missing or incorrect assignment id.";
            include($_SERVER['DOCUMENT_ROOT'] . 'view/error.php');
            exit();
        }
        break;
    default:
        $course_name = get_course_name($course_id);
        $courses = get_courses();
        $assignments = get_assignments_by_course($course_id);
        include('view/assignment_list.php');
}
