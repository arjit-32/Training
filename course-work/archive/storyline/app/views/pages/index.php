<?php require APPROOT . '/views/inc/header.php'; ?>
  <div class="jumbotron jumbotron-fluid text-center">
    <div class="container">
    <h1 class="display-3"><?php echo $data['title']; ?></h1>
    <p class="lead"><?php echo $data['description']; ?></p>
    </div>
  </div> 
	
	<div class="row">
		<div class="col-md-6 text-center">
			<img src="<?php echo URLROOT; ?>/public/img/Story-Line.png" alt="not" width="60%">
		</div>
		<div class="col-md-6 mt-5">
			<div class="card">
  <div class="card-header">
    Vision
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>We are all storytellers. We all live in a network of stories. There isn’t a stronger connection between people than storytelling</p>
      <footer class="blockquote-footer"><cite title="Source Title">Jimmy Neil Smith, Director of the International Storytelling Center </cite></footer>
    </blockquote>
  </div>
</div>
		</div>
	</div>
<?php require APPROOT . '/views/inc/footer.php'; ?>
