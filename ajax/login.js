// Login
function login(){
  let formdata = new FormData(document.getElementById('login-form'));
  let loading = '<img src="img/reload.svg">';
  $.ajax({
    url: 'backend/login.php',
    type: 'POST',
    data: formdata,
    contentType: false,
    processData: false,
    cache: false,
    beforeSend: function(){
      $("#login").attr('disabled', 'disabled');
      $("#login").html(loading);
    }
  })
  .done(function(res) {
    $("#login").removeAttr('disabled');
    $("#login").html('LOGIN');
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
