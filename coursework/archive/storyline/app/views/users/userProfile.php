<?php require APPROOT . '/views/inc/header.php'; ?>
<?php flash('post_message'); ?>
	<div class="row mb-3">
		<div class="col-md-6">
			<h1>Your Posts</h1>
		</div>
		<div class="col-md-6">
			<a href="<?php echo URLROOT; ?>/posts/add" class="btn btn-primary pull-right">
				<i class="fa fa-pencil"></i> Add Story
			</a>
		</div>   

	</div>
	<?php foreach($data['posts'] as $post) :  ?>
		
		<div class="card card-body mb-3">
			<h4 class="card-title"> <?php echo $post->title; ?>   <a href="<?php echo URLROOT; ?>/posts/edit/<?php echo $post->postId; ?>"  class="btn btn-dark pull-right ml-3">Edit</a> 

		<form class="pull-right" action="<?php echo URLROOT; ?>/posts/delete/<?php echo $post->id; ?>" method="post">
			<input type="submit" value="Delete" class="btn btn-danger">
		</form>
		

			  </h4>
					
		
		</div>

	<?php endforeach; ?>

<?php require APPROOT . '/views/inc/footer.php'; ?>