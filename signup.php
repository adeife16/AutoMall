<?php
    $title = "Sign Up";
    require_once 'header.php';
?>
<style media="screen">
    .valid{
        border: 1px  solid #3bd329;
    }
    .error, .invalid{
        color: #d70202;
    }
    #image-preview{
        width: 200px;
        height: 200px;
        border-radius: 10px;
        display: none;
    }
    .message{
        width: max-content;
        border-radius: 10px;
        position: absolute;
        right: 20px;
        margin-right: 20px;
    }
</style>
<div class="message hide red p-3">
    <p class="color-white">An error has occurred please try again</p>
</div>
    <div class="container-fluid pt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 contain col-xl-4 col-sm-12">
                <div class="signup-box red-border p-3" style="border-radius: 10px">
                    <h2 class="text-center ">SIGNUP</h2>
                    <form class="form" action="" method="post" name="signup-form" id="signup-form">
                        <div class="form-group">
                          <label for="fname">First Name</label>
                          <input type="text" class="form-control" id="fname" name="fname" placeholder="First Name">
                        </div>
                        <div class="form-group">
                          <label for="lname">Last Name</label>
                          <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name">
                        </div>
                        <div class="form-group">
                            <span for="email">Email</span>
                            <input type="text" name="email" class="form-control" id="email" placeholder="Email" value="">
                        </div>
                        <div class="form-group">
                            <span for="pass">Password</span>
                            <input type="password" name="pass" id="pass" class="form-control" value="" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <span for="con-pass">Confirm Password</span>
                            <input type="password" name="conPass" id="conPass" class="form-control" value="" placeholder="Confirm Password">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone Number">
                        </div>
                        <div class="form-group">
                          <label for="address">Address</label>
                          <textarea type="text" class="form-control" id="address" name="address" placeholder="Enter Your Address"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="state">State</label>
                          <select class="form-control" name="state" id="state">

                          </select>
                        </div>
                        <div class="form-group">
                            <div class="preview text-center">
                                <img src="" alt="" id="image-preview">
                            </div>
                          <label for="picture">Picture</label>
                          <input type="file" class="form-control" id="picture" name="picture">
                          <!-- <small class="color-red">File size limit: 1Mb</small> -->
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn color-white btn-primary" name="signup" id="signup">SIGN UP</button>
                        </div>
                    </form>
                    <hr>
                    <div class="">
                        <p class="text-center"><a href="merchant_signup.php">Sign up as merchant</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
    require_once 'footer.php';
?>
