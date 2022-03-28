<?php

use PHPUnit\Framework\Constraint\IsEmpty;

$pdo = new PDO('mysql:host=localhost;port=3306;dbname=test', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

var_dump($_FILES);

$errors = [];
$title = '';
$description = '';
$price = '';
$create_date = '';
$image = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $create_date = $_POST['date'];
    $image = $_FILES['image'] ?? null;

    if (!$title) $errors[] = 'Product title is required';
    if (!$price) $errors[] = 'Price is required';
    if (!$create_date) $errors[] = 'Date is required';

    if (!is_dir('images')) {
        mkdir('images');
    }

    $imagePath = '';
    if ($image) {
        $imagePath = 'images/' . $image['name'];
        move_uploaded_file($image['tmp_name'], $imagePath);
    }

    if (empty($errors)) {
        $statement = $pdo->prepare("INSERT INTO products(title,description,image,price,create_date) VALUES(:title, :description, :image, :price, :create_date)");
        $statement->bindValue(':title', $title);
        $statement->bindValue(':description', $description);
        $statement->bindValue(':image', $imagePath);
        $statement->bindValue(':price', $price);
        $statement->bindValue(':create_date', $create_date);
        $statement->execute();
        header('Location: index.php');
    }
}
?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Products</title>
</head>

<body>
    <h1 class="text-center">Create new product</h1>
    <a href="index.php" class="btn btn-secondary">Back</a>
    <?php if (!empty($errors)) { ?>
        <div class="alert alert-danger">
            <?php
            foreach ($errors as $err) {
                echo $err . "<br>";
            } ?>
        </div>
    <?php } ?>

    <form action="" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label>Prouct Image</label> <br>
            <input type="file" name="image">
        </div>

        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" name="title" value="<?php echo $title; ?>">
        </div>

        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="3" name="description"><?php echo $description; ?></textarea>

        </div>

        <div class="form-group">
            <label>Launch Date</label>
            <input type="date" class="form-control" name="date" value="<?php echo $create_date; ?>">
        </div>

        <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" name="price" value="<?php echo $price; ?>">
        </div>

        <button class="btn btn-success">Submit</button>
    </form>
</body>

</html>