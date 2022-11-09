// get states
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
    show_state(data);
  })
}

// get all city
function get_city(state){
  if(state != "" || state != null){
    $.ajax({
      type: 'POST',
      url: 'backend/location.php',
      cache: false,
      data: {
        "get_cities": state
      },
      beforeSend: function(){
        $("#rider-city").html("Loading...");
      }
    })
    .done(function(response){
      data = JSON.parse(response);
      load_city(data);
    })
  }
}

// search rider
function searchRider(key){
  $.ajax({
    url: 'backend/rider.php',
    type: 'POST',
    cache: false,
    data: {
      search: key
    },
    beforeSend: function(){

    }
  })
  .done(function(response) {
    data = JSON.parse(response)
    // console.log(data);
    showRiders(data);
  })
  .fail(function() {
    console.log("error");
  })
  // .always(function() {
  //   console.log("complete");
  // });

}

function delRider(rider_id){
  $.ajax({
    url: 'backend/rider.php',
    type: 'POST',
    data: {
      delRider: rider_id
    }
  })
  .done(function(response) {
    if(response === "success"){
      alert_success("Rider deleted successfully!");
    }
  })
  // .fail(function() {
  //   console.log("error");
  // })
  // .always(function() {
  //   console.log("complete");
  // });

}
