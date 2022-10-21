<?php
    $title = "Login";
    require_once 'header.php';
?>
<style>
    .message{
        width: max-content;
        border-radius: 10px;
        position: absolute;
        right: 20px;
        top: 200px;
        margin-right: 20px;
    }
</style>
    <div class="message  red p-3">
        <p class="color-white">Invalid login details</p>
    </div>
    <div class="container-fluid pt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12">
                <div class="login-box text-center red-border p-3" style="border-radius: 10px">
                    <h2>LOGIN</h2>
                    <form class="form" action="" id="login-form" method="post">
                        <div class="form-group">
                            <span for="email">Email</span>
                            <input type="text" name="email" class="form-control" id="email" placeholder="Email" value="">
                        </div>
                        <div class="form-group">
                            <span for="pass">Password</span>
                            <input type="password" name="pass" id="pass" class="form-control" value="">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn color-white btn-primary" name="login" id="login">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php
    require_once 'footer.php';
?>
