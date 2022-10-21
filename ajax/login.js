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
  })
  .fail(function() {
    console.log("error");
  })
}
