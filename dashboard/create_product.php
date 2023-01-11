<?php
  $title  = 'Add Product';
  require_once 'header.php';
?>
<style media="screen">
  .select2-container{
    display: block !important;
  }
</style>
<style type="text/css">
p {
  margin: 0;
}
  .upload__box {
    padding: 40px;
  }
  .upload__inputfile {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .upload__btn {
    display: inline-block;
    font-weight: 600;
    color: #fff;
    text-align: center;
    min-width: 116px;
    padding: 5px;
    transition: all .3s ease;
    cursor: pointer;
    border: 2px solid;
    background-color: #331f77;
    border-color: #331f77;
    border-radius: 10px;
    line-height: 26px;
    font-size: 14px;
}
    .upload__btn:hover {
      background-color: unset;
      color: #331f77;
      transition: all .3s ease;
    }

    .upload__btn-box {
      margin-bottom: 10px;
    }
      .upload__img-wrap {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }

      .upload__img-box {
      width: 200px;
      padding: 0 10px;
      margin-bottom: 12px;
    }

      .upload__img-close {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 10px;
        right: 10px;
        text-align: center;
        line-height: 24px;
        z-index: 1;
        cursor: pointer;
      }
        .upload__img-close:after {
        content: '\X';
        font-size: 14px;
        color: white;
      }


.img-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-bottom: 100%;
}
</style>
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800"><?php print $title; ?></h1>
</div>
<div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="form-div">
      <div class="control" id="control">
        <div class="form-group">
          <label for="cat">Category</label>
          <select class="form-control" name="cat" id="cat" onchange="change()">

          </select>
        </div>
        <div class="form-group">
          <label for="sub-cat">Category</label>
          <select class="form-control" name="sub-cat" id="sub-cat" disabled>

          </select>
        </div>
        <div class="float-right">
          <button type="button" class="btn btn color-white blue" id="next" onclick="next()" name="button">Next</button>
        </div>
      </div>

      <div class="card shadow mb-4" id="form-card">
        <div class="card-body">
          <button type="button" class="red color-white btn float-right mb-5" id="cancel" onclick="cancel()">Cancel</button>
          <form class="mt-5" action="" id="product-form" method="post" enctype="multipart/form-data">
          </form>
        </div>
      </div>

    </div>
  </div>
</div>
<?php
  require_once 'footer.php';
?>
