<?php
$title = "View Profile";
require "header.php";
if(!isset($_SESSION['id']) || $_SESSION['id'] == "")
{
  ?>
  <script type="text/javascript">window.location.replace('index.php');</script>
  <?php
}
?>
<br>
<br>
<br>
<div class="page-loader hide" id="page-loader">
  <div class="loader">
    <div>
      <img src="assets/images/icon/loader.svg" alt="">
    </div>
  </div>
</div>
<section class="ads_area pt-70  ">
  <div class="container">
    <div class="profile-page">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <span class="float-right">
                <div name="employment-status" id="employment-status" class=""></div>
                <h5 id="status" class="status"></h5>
              </span>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 text-center">
              <div style="margin: 0 auto" id="">
                <img src="" class="profile-image" id="profile-image" alt="Profile Image">
              </div>
              <div class="profile-details-display mt-5">
                <div class="stars" id="stars">
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                </div>
                <div class="container" id="basic_details">

                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-12 col-md-12">
              <div class="employ float-right" id="employ">

              </div>
              <div class="employ-display" id="employ-display">

              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-6 col-md-6">
              <div id="other-details" class="other-details">

              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-12 col-md-12">
              <div class="rating">
                <button class=" btn blue color-white float-right" data-toggle="modal" id="rate-btn" data-target="#ratingModal">Rate and Review</button>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-8 col-md-8">

            </div>
          </div>
          <div class="row justify-content-center mt-5 mb-120">
            <div class="col-lg-8 col-md-8">
              <h3>Reviews</h3>
              <br>
              <div class="all-reviews p-4" id="review-box">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="modal fade" id="ratingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel"> Rate and Review</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="rating">
          <div class="stars">
            <i class="fas fa-star fa-3x rating-star" data-index = "0"></i>
            <i class="fas fa-star fa-3x rating-star" data-index = "1"></i>
            <i class="fas fa-star fa-3x rating-star" data-index = "2"></i>
            <i class="fas fa-star fa-3x rating-star" data-index = "3"></i>
            <i class="fas fa-star fa-3x rating-star" data-index = "4"></i>
          </div>
        </div>
          <hr>
          <div class="review pt-4">
            <h5 class="">Leave a Comment</h5>
            <form class="form" action="" method="post">
              <div class="form-group">
                <textarea name="rider-review" rows="8" cols="80" id="rider-review" class="form-control" maxlength="200" minlength="20"></textarea>
              </div>
              <div class="form-group">
                <button type="button" name="rider-review-submit" class="btn color-white blue" id="rider-review-submit">SUBMIT</button>
                <button type="button" name="rider-review-btn" class="btn color-white blue hide" id="rider-review-btn" disabled>Please Wait</button>
              </div>
            </form>
          </div>
      </div>
      <div class="modal-footer">
        <button class="btn purple color-white" type="button" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<?php
require_once 'footer.php';
?>
