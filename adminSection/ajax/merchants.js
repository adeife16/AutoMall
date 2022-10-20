// get all Merchants
function getAllMerchants(){
  $.ajax({
    url: 'backend/merchants.php?getMerchants=all',
    type: 'GET',
    cache: false
  })
  .done(function(res){
    let data = JSON.parse(res);
    if (data.status === "success") {
      showMerchants(data);
    }
  })
  .fail(function() {
    console.log("error");
  })

}
