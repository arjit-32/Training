<?php
function get_assignments_by_course($course_id)
{
    global $db;
    if ($course_id) {
        $query = "SELECT A.id, A.description, C.courseName from assignments A LEFT JOIN courses C ON A.courseId=C.courseId WHERE A.courseId=:courseID Order by id";
    } else {
        $query = "SELECT A.id, A.description, C.courseName from assignments A LEFT JOIN courses C ON A.courseId=C.courseId Order by C.courseId";
    }
    $stmt = $db->prepare($query);
    $stmt->bindValue(':courseId', $course_id);
    $stmt->execute();
    $assignments = $stmt->fetchAll();
    $stmt->closeCursor();
    return $assignments;
}

function delete_assignment($assignment_id)
{
    global $db;
    $query = "DELETE from assignments WHERE id=:assignment_id";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':assignment_id', $assignment_id);
    $stmt->execute();
    $stmt->closeCursor();
}


function add_assignment($course_id, $description)
{
    global $db;
    $query = "INSERT INTO assignments(description,courseId) VALUES(:description,:course_id)";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':description', $description);
    $stmt->bindValue(':course_id', $course_id);
    $stmt->execute();
    $stmt->closeCursor();
}
