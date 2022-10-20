// get all states
function getStates(){
  $.ajax({
    type: 'POST',
    url: 'backend/location.php',
    cache: false,
    data:{
      "get_states": "get"
    },
    beforeSend: function(){

    }
  })
  .done(function(response){
    data = JSON.parse(response);
    showStates(data);
  })
}
// signup buyer
function signup(form){
  // let formdata = new FormData(document.getElementById('signup-form'));
  $.ajax({
    url: 'backend/signup.php',
    type: 'POST',
    data: form,
    cache: false,
    contentType: false,
    processData: false,
  })
  .done(function(res) {
    let data = JSON.parse(res);
    if(data === "sucess"){
      $(".contain").html(`
          <div class="p-3 text-center green">
              <p class="color-white">Account created successfully. Check you mail for futher instructions in activatig your account</p>
          </div>
        `)
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
