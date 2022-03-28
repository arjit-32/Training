<?php

$id = $_GET['id'] ?? null;
if (!$id) {
    header('Location: index.php');
    exit;
}

$pdo = new PDO('mysql:host=localhost;port=3306;dbname=test', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$statement = $pdo->prepare("SELECT * from products WHERE id= :id");
$statement->bindValue('id', $id);
$statement->execute();
$product = $statement->fetch(PDO::FETCH_ASSOC);

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
        $statement = $pdo->prepare("UPDATE products SET title = :title,description = :description,image = :image,price = :price,create_date = :create_date WHERE id = product['id']");
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
    <h1>Update product</h1>
    <a href="index.php" class="btn btn-secondary">Back</a>
    <form action="" method="POST" enctype="multipart/form-data">
        <?php if ($product['image']) { ?>
            <img width="100px" src="<?php echo $product['image'] ?>" alt="">
        <?php } ?>
        <div class="form-group">
            <label>Prouct Image</label> <br>
            <input type="file" name="image">
        </div>
        <div class="form-group">
            <?php if ($product['title']) { ?>
                <label>Title</label>
                <input type="text" class="form-control" name="title" value="<?php echo $product['title'] ?>">
            <?php } ?>
        </div>


        <div class="form-group">
            <?php if ($product['description']) { ?>
                <label>Description</label>
                <textarea class="form-control" rows="3" name="description"><?php echo $product['description']; ?></textarea>
            <?php } ?>
        </div>
        <div class="form-group">
            <?php if ($product['create_date']) { ?>
                <label>Launch Date</label>
                <input type="date" class="form-control" name="date" value="<?php date_format($product['create_date'], "Y-m-d"); ?>">
            <?php } ?>
        </div>

        <div class="form-group">
            <?php if ($product['price']) { ?>
                <label>Price</label>
                <input type="number" class="form-control" name="price" value="<?php echo $product['price']; ?>">
            <?php } ?>
        </div>

        <button class="btn btn-success">Submit</button>
    </form>
</body>

</html>