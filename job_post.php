<?php
  $title = "Job Post";
  require_once 'header.php';
  if(!isset($_SESSION['id']))
  {
    ?>
    <script type="text/javascript">window.location.replace('index.php');</script>
    <?php
  }
?>
<section class="job-post-page pt-70 mt-70">
  <div class="row">
    <div class="col-sm-12">
      <div class="posted-job p-70" id="posted-job">

      </div>
    </div>
  </div>
  <div class="row mt-4 justify-content-center">
    <div class="col-sm-12 col-lg-6 col-xl-6">
      <div class="job-post m-4 p-3 white color-dark">
        <h4 class="text-center">Post a Job</h4>
        <form class="job-post-form" id="job-post-form" action="" method="post">
          <div class="form-group">
            <span for="title">Job Title</span>
            <input type="text" class="form-control" id="title" name="title" value="" placeholder="Job Title">
          </div>
          <div class="form-group">
            <span for="type">Job Type</span>
            <select class="form-control" id="type" name="type">
              <option value="">Select Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <div class="form-group" id="period-div">
            <span for="period">Period(In Months)</span>
            <input type="text" name="period" class="form-control" value="" placeholder="Period In Months">
          </div>
          <div class="form-group">
            <span for="desc">Job Description</span>
            <textarea name="desc" id="desc" class="desc form-control" rows="" cols="" placeholder="Enter Job Description"></textarea>
          </div>
          <div class="form-group text-center">
            <button type="button" class="btn color-white blue" name="submit-job-post" id="submit-job-post">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>
<!-- Edit Post Modal -->
<div id="editModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="postEditModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Edit Job Post</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="post-edit" id="post-edit">

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class=" btn color-white purple" data-dismiss="modal" aria-label="Close">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
<div id="deleteModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="postDeleteModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Delete Job Post</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Confirm Delete?</p>
        <span style="color: red">Deleted job post cannot be recovered</span>
      </div>
      <div class="modal-footer">
        <button type="button" name="deletePost" id="deletePost" class="red btn color-white" value="">Confirm</button>
        <button type="button" class=" btn color-white purple" data-dismiss="modal" aria-label="Close">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>

<?php
  require_once 'footer.php';
?>
