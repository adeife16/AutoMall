// Login
function login(){
  let formdata = new FormData(document.getElementById('login-form'));
  $.ajax({
    url: 'backend/login.php',
    type: 'POST',
    data: formdata,
    contentType: false,
    processData: false,
    cache: false
  })
  .done(function(res) {
    let data = JSON.parse(res);
    console.log(data);
    if(data[0].status === "success"){
      // setSession(data[1]);
      window.location.replace('index.php');
    }
    else{
      alert_failure("Invalid Login details");
    }
  })
  .fail(function() {
    console.log("error");
  })
}
