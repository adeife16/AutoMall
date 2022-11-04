// Get Profile Details
function getProfile(session_var){
      var session_type = sessionStorage.getItem("session_type");
      $.ajax({
        type: 'GET',
        url: 'backend/profile.php?getProfile='+session_var+'&type='+session_type,
        cache: false,
        beforeSend: function(){
          $('#page-loader').toggleClass("hide");
        }
      })
      .done(function(response){
        data = JSON.parse(response)
        showProfile(session_type, data[0]);
      })
}
//
function getState(){
return  $.ajax({
    type: 'POST',
    url: 'backend/location.php',
    cache: false,
    data:{
      'get_states': 'get'
    },
    beforeSend: function(){
    }
  })
  .done(function(response){
    let data = JSON.parse(response);
      showStates(data);


  });
}
