// Get all dashboard data
function getDashboardData(){
  $.ajax({
    url: 'backend/dashboard.php',
    type: 'POST',
    cache: false,
    data: {dashboardData: 'value1'},
    beforeSend: function(){

    }
  })
  .done(function(response) {
    data = JSON.parse(response);
    console.log(data);
    var riders = data[0].riders;
    var ridersEmploy = data[1].ridersEmployed;
    var companies = data[2].companies;
    var request = data[3].requests;
    showRiders(riders);
    showRidersEmploy(ridersEmploy);
    showCompanies(companies);
    // showRequest(request)
  })
  // .fail(function() {
  //   console.log("error");
  // })
  // .always(function() {
  //   console.log("complete");
  // });

}

// Get new Requests
//
// function getNewRequest(){
//   $.ajax({
//     url: 'backend/dashboard.php',
//     type: 'POST',
//     cache: false,
//     data: {getRequest: 'value1'}
//   })
//   .done(function(response) {
//     data = JSON.parse(response);
//     console.log(data);
//     showNewRequest(data);
//   })
//   // .fail(function() {
//   //   console.log("error");
//   // })
//   // .always(function() {
//   //   console.log("complete");
//   // });
//
// }
