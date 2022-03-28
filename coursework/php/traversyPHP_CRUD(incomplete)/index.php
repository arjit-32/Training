<?php

$pdo = new PDO('mysql:host=localhost;port=3306;dbname=test', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$statement = $pdo->prepare('SELECT * FROM products');
$statement->execute();
$products = $statement->fetchAll(PDO::FETCH_ASSOC);
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
    <h1 class="text-center">Products</h1>
    <a href="create.php" class="btn btn-success float-end">Create Product</a>
    <table class="table">
        <thead>
            <tr>
                <th>Product Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Launch Date</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($products as $p) : ?>
                <tr>
                    <td scope="row"><?php echo $p['id'] ?></td>
                    <td> <img width="100px" src="<?php echo $p['image'] ?>" alt="img hai yha"></td>
                    <td><?php echo $p['title'] ?></td>
                    <td><?php echo $p['description'] ?></td>
                    <td><?php echo $p['create_date'] ?></td>
                    <td><?php echo $p['price'] ?></td>
                    <td>
                        <a href="update.php?id=<?php echo $p['id']; ?>" class="btn btn-sm btn-outline-success">Edit</a>
                        <a href="delete.php?id=<?php echo $p['id']; ?>" class="btn btn-sm btn-outline-danger">Delete</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

</body>

</html>