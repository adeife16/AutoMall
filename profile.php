<?php
    $title = "Profile";
    require_once 'header.php';
?>
<style>
    .display-pic{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    .upload-btn-wrapper {
      position: relative;
      overflow: hidden;
      display: inline-block;
      /* left: 70px; */
      top: 20px;
    }

    .upload-btn {
      border: 0;
      padding: 8px 20px;
      border-radius: 8px;
      font-size: 20px;
      font-weight: bold;
    }

    #upload-input{
    opacity: 0;
    position: absolute;
    left: 17px;
    font-size: 25px;

    }
</style>
    <div class="container-fluid pt-5">
        <div class="row justify-content-center">
            <div class="col-md-2 col-lg-2 col-xl-2 col-sm-12">
                <div class="side-menu bg-secondary pt-20 pl-30 pr-30 pb-20">
                    <a href="#account" class="side-link mt-30 mb-30"><i class="fas fa-user"></i> Account</a>
                    <a href="#inbox" class="side-link mt-30 mb-30"><i class="fas fa-envelope"></i> Inbox</a>
                    <a href="#orders" class="side-link mt-30 mb-30"><i class="fas fa-box"></i> Orders</a>
                    <a href="#wishlist" class="side-link mt-30 mb-30"><i class="fas fa-heart"></i> Wishlist</a>
                </div>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-8 col-sm-12">
                <div class="display br-secondary" id="profile-div">

                </div>
            </div>
        </div>
    </div>
<?php
    require_once 'footer.php';
?>
