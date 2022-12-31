<?php
  $title = "Products";
  require_once 'header.php';
?>
<link href="vendor/datatables/datatables.min.css" rel="stylesheet">
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800"><?php print $title; ?></h1>
</div>
<div class="row">
  <div class="col-lg-12 mb-30 mt-30">
    <a href="create_product.php" class="btn white color-blue border-blue">Add Product</a>
  </div>
  <div class="col-lg-12 col-md-12">
    <div class="cat-div">
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Id</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="display-product">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="newCatModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Add New Category</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="form" id="cat-form" action="" method="post">
          <div class="form-group">
            <span for="cat-name">Category Name</span>
            <input type="text" name="cat-name" class="form-control" id="cat-name" value="" placeholder="Category Name">
          </div>
        </form>
        <div class="form-group">
          <button type="button" class="btn blue color-white" id="submit" name="submit">SUBMIT</button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn purple color-white" type="button" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Delete Category</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <p style="color:red">The products and sub-categories in this category will be deleted</p>
        <p style="color:red">Action is not Reversible</p>
        <p style="color:red"></p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-danger color-white" id="confirmDelete" type="button" data-dismiss="modal">Delete</button>
        <button class="btn dark color-white" type="button" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Delete Category</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="form showEdit" id="showEdit" method="post" action="">

        </form>
      <div class="modal-footer">
        <!-- <button class="btn btn-danger color-white" id="confirmDelete" type="button" data-dismiss="modal">Delete</button> -->
        <button class="btn dark color-white" type="button" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
<?php
require_once 'footer.php';
?>
