$(document).ready(function() {
  getDashboardData();
  // getNewRequest();
});
// display total amount of riders
function showRiders(riders){
  $("#total-riders").html(riders.length);
}
// display total amount of employed riders
function showRidersEmploy(riders){
  $("#total-rider-employ").html(riders.length);
}
// display total amount of companies
function showCompanies(companies){
    $("#total-company").html(companies.length);
}

// Display pending employment Requests
function showRequest(requests){
  $("#pending-request").html(requests.length);
}
// // display request notification
// function showNewRequest(data){
//   if(data.length < 10){
//     $("#request-alert").html(data.length);
//   }
//   else{
//     $("#request-alert").html('9+');
//   }
//
//     for(var req in data){
//       $("#alert-list").append('<a class="dropdown-item d-flex align-items-center" href="request.php"><div><div class="small text-gray-500">'+data[req].date_issued+'</div><span class="font-weight-bold"> '+data[req].company_name+' has requested to employ '+data[req].rider_name+'</span></div></a>')
//
//     }
// }
