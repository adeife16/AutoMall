<div class="alert-box success"></div>
<div class="alert-box failure"></div>
<div class="alert-box warning"></div>
<!-- <footer class="sticky-footer bg-white">
  <div class="container my-auto">
    <div class="copyright text-center my-auto">
      <span>Copyright &copy; Your Website 2019</span>
    </div>
  </div>
</footer> -->
<!-- End of Footer -->

</div>
<!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
<i class="fas fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
  <div class="modal-footer">
    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
    <a class="btn btn-primary" href="logout.php">Logout</a>
  </div>
</div>
</div>
</div>

<!-- Bootstrap core JavaScript-->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="js/sb-admin-2.min.js"></script>
<script src="js/main.js"></script>
<script src="js/notification.js" charset="utf-8"></script>

<!-- Dashboard page scripts -->
<?php if ($title == "Dashboard"): ?>
  <script src="js/dashboard.js" charset="utf-8"></script>
  <script src="ajax/dashboard.js" charset="utf-8"></script>
<?php endif; ?>

<!-- Products page scripts -->
<?php if ($title == "Products"): ?>
  <link rel="stylesheet" href="css/datatables.min.css">
  <script src="js/jquery.dataTables.min.js" charset="utf-8"></script>
  <script src="ajax/products.js"></script>
  <script src="js/products.js" charset="utf-8"></script>
<?php endif; ?>

<!-- Create product page scripts -->
<?php if ($title == "Add Product"): ?>
  <link rel="stylesheet" href="vendor/select2/dist/css/select2.min.css">
  <link rel="stylesheet" href="css/jquery.imagesloader.css">
  <script type="text/javascript" src="js/jquery.imagesloader-1.0.1.js"></script>
  <script src="vendor/select2/dist/js/select2.full.min.js" charset="utf-8"></script>
  <script src="ajax/create_product.js" charset="utf-8"></script>
  <script src="js/create_product.js" charset="utf-8"></script>
<?php endif; ?>

<!-- Edit product page scripts -->
<?php if ($title == "Edit Product"): ?>
  <link rel="stylesheet" href="vendor/select2/dist/css/select2.min.css">
  <link rel="stylesheet" href="css/jquery.imagesloader.css">
  <script type="text/javascript" src="js/jquery.imagesloader-1.0.1.js"></script>
  <script src="vendor/select2/dist/js/select2.full.min.js" charset="utf-8"></script>
  <script src="ajax/edit_product.js" charset="utf-8"></script>
  <script src="js/edit_product.js" charset="utf-8"></script>
<?php endif; ?>

<!-- Page level plugins -->
<!-- <script src="vendor/chart.js/Chart.min.js"></script> -->

<!-- Page level custom scripts -->
<!-- <script src="js/demo/chart-area-demo.js"></script>
<script src="js/demo/chart-pie-demo.js"></script> -->

</body>

</html>
