// get all Admins

function getAllAdmins(){
  $.ajax({
    url: 'backend/admins.php?getAdmins=all',
    type: 'GET',
    cache: false
  })
  .done(function(res) {
    console.log(res);
    let data = JSON.parse(res);
    if(data.status === "success"){
      showAdmins(data.data);
    }
  })
  .fail(function() {
    console.log("error");
  })
}
