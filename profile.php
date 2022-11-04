<?php
    $title = "Profile";
    require_once 'header.php';
?>
<style>
    .valid{
        border: 1px  solid #3bd329;
    }
    .error, .invalid{
        color: #d70202;
    }
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
            <br>
            <br>
            <br>
            <br>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-2 col-lg-2 col-xl-2 col-sm-12">
            </div>
            <div class="col-md-12 col-lg-12 col-xl-8 col-sm-12">
                <div class="password-div br-secondary" id="password-div">
                    <h4>CHANGE PASSWORD</h4>
                    <form class="" action="" method="post" id="pass-form" name="pass-form">
                        <div class="form-group" >
                            <label for="old-pass">Old Password</label>
                            <input type="password" class="form-control" name="oldPass" id="oldPass" placeholder="Old Password">
                        </div>
                        <div class="form-group">
                            <label for="new-pass">New Password</label>
                            <input type="password" class="form-control" name="newPass" id="newPass" placeholder="New Password">
                        </div>
                        <div class="form-group">
                            <label for="con-pass">Confirm Password</label>
                            <input type="password" class="form-control" name="conPass" id="conPass" placeholder="Confirm Password">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn red color-white" name="update-pass" id="update-pass">UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
<?php
    require_once 'footer.php';
?>
