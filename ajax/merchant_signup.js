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
