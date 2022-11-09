<?php
  $title = "Dashboard";
  require_once 'header.php';
?>
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
</div>
<div class="row justify-content-center">

  <!-- Total Riders-->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Sales (This Week)</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="week-sales"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-money-bill-alt  fa-2x text-gray-300"></i>
            <!-- <i class="fas fa-biking"></i> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Total Employed Riders -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Sales (This Month)</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="month-sales"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-money-bill-alt  fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Total Companies-->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Sales (This Year)</div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="year-sales"></div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-money-bill-alt  fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- Pending Requests Card Example -->
<div class="row justify-content-center">
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Sales</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="total-sales"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-money-bill-alt  fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Products</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="total-product"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-tag  fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-warning shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Transactions</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="Transactions"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-user-tag  fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <!-- Area Chart -->
  <div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">Sales Overview</h6>
        <div class="dropdown no-arrow">
          <select class="form-control" id="sales-year" name="sales-year">

          </select>
        </div>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-area"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          <canvas id="myAreaChart" style="display: block; width: 1039px; height: 320px;" width="1039" height="320" class="chartjs-render-monitor"></canvas>
        </div>
      </div>
    </div>
  </div>

  <!-- Pie Chart -->
  <div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">Buyers</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <table class="table" id="buyer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Orders</th>
              <th>Value</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <!-- Area Chart -->
  <div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">Best Selling</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <table class="table" id="best-selling">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Value</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>

  <!-- Pie Chart -->
  <div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-primary">Sales Distribution</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          <canvas id="myPieChart" width="486" height="245" style="display: block; width: 486px; height: 245px;" class="chartjs-render-monitor"></canvas>
        </div>
        <div class="mt-4 text-center small">
          <span class="mr-2">
            <i class="fas fa-circle text-primary"></i> Direct
          </span>
          <span class="mr-2">
            <i class="fas fa-circle text-success"></i> Social
          </span>
          <span class="mr-2">
            <i class="fas fa-circle text-info"></i> Referral
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<?php
  require_once 'footer.php';
?>
