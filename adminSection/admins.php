<?php
  $title = "Admins";
  require_once 'header.php';
?>
<link href="vendor/datatables/datatables.min.css" rel="stylesheet">
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800"><?php print $title; ?></h1>
</div>
<div class="row">
  <div class="col-lg-12 mb-30 mt-30">
    <form class="form-inline" action="index.html" method="post">
      <div class="form-group">
        <input type="text" name="search" class="form-control" id="search" value="" placeholder="Search Merchant">
      </div>
      &nbsp;
      &nbsp;
      <div class="form-group">
        <button type="button" data-toggle="modal" data-target="#newCatModal" class="btn white color-blue border-blue" id="add" name="button">Search</button>
      </div>
    </form>
  </div>
  <div class="col-lg-12 mb-30 mt-30">
        <button type="button" data-toggle="modal" data-target="#newAdminModal" class="btn white float-right color-blue border-blue" id="add" name="button">New Admin</button>
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
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created</th>
                  <th>Last Login</th>
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
<div class="modal fade" id="newAdminModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Add New Admin</h4>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="form" id="cat-form" action="" method="post">
          <div class="form-group">
            <span for="first_name">First Name</span>
            <input type="text" name="first_name" class="form-control" id="first_name" value="" placeholder="First Name">
          </div>

          <div class="form-group">
            <span for="last_name">Last Name</span>
            <input type="text" name="last_name" class="form-control" id="last_name" value="" placeholder="Last Name">
          </div>

          <div class="form-group">
            <span for="email">Email</span>
            <input type="text" name="email" class="form-control" id="email" value="" placeholder="Email">
          </div>

          <div class="form-group">
            <span for="password">Password</span>
            <input type="password" name="password" class="form-control" id="password" value="" placeholder="Password">
          </div>

          <div class="form-group">
            <span for="confirm-password">Confirm Password</span>
            <input type="password" name="confirm-password" class="form-control" id="confirm-password" value="" placeholder="Confirm Password">
          </div>

          <div class="form-group">
            <img src="" alt="" class="img-preview" id="img-preview">
            <br>
            <span for="email">Picture</span>
            <input type="file" name="picture" class="form-control" id="picture">
          </div>

          <div class="form-group">
            <span for="role">Role</span>
            <select  name="role" class="form-control" id="role">
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>
          <div class="form-group">
            <button type="button" class="btn blue color-white" id="submit" name="submit">SUBMIT</button>
          </div>
        </form>
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
