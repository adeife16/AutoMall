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
        // console.log(data);
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

// Update Profile Details
function update_profile_company(){
  var session_type = sessionStorage.getItem("session_type");
  var session_var = sessionStorage.getItem("session_id");
  var address = $("#edit_address").val();
  var phone1 = $("#edit_phone1").val();
  var phone2 = $("#edit_phone2").val();
  var employees = $("#edit_employees").val();
  var state = $("#edit_state").val();
  var city = $("#edit_city").val();

  $.ajax({
    type: 'POST',
    url: 'backend/profile.php',
    cache: false,
    data:{
      "update_profile" : session_type,
      "address" : address,
      "phone1" : phone1,
      "phone2" : phone2,
      "employees" : employees,
      "state" : state,
      "city" : city

    },
    beforeSend: function(){
      $("#edit_profile, #edit_profile_btn").toggleClass("hide");
    }
  })
  .done(function(response){
    if(response == "success"){
      $("#edit_profile, #edit_profile_btn").toggleClass("hide");
      alert_success("Profile Updated Successfully");
      get_profile(session_var);

    }
    else{
      $("#edit_profile, #edit_profile_btn").toggleClass("hide");
      alert_failure("An error occured while updating your data");
    }
  })
}
function update_profile_rider(){
  var session_type = sessionStorage.getItem("session_type");
  var session_var = sessionStorage.getItem("session_id");
  var firstname = $("#rider_edit_firstname").val();
  var lastname = $("#rider_edit_lastname").val();
  var address = $("#rider_edit_address").val();
  var phone1 = $("#rider_edit_phone1").val();
  var phone2 = $("#rider_edit_phone2").val();
  var experience = $("#rider_edit_experience").val();
  var about = $("#rider_edit_about").val();
  var company_name = $("#rider_edit_companyname").val();
  var company_address = $("#rider_edit_companyaddress").val();
  var company_phone = $("#rider_edit_companyphone").val();
  var state = $("#rider_edit_state").val();
  var city = $(" #rider_edit_city").val();

  $.ajax({
    type: 'POST',
    url: 'backend/profile.php',
    cache: false,
    data:{
      "update_profile" : session_type,
      "address" : address,
      "phone1" : phone1,
      "phone2" : phone2,
      "experience" : experience,
      "firstname" : firstname,
      "lastname" : lastname,
      "about" : about,
      "company_name" : company_name,
      "company_address" : company_address,
      "company_phone" : company_phone,
      "state" : state,
      "city" : city
    },
    beforeSend: function(){
      $("#edit_profile_rider, #edit_profile_rider_btn").toggleClass("hide");
    }
  })
  .done(function(response){

    if(response == "success"){
      $("#edit_profile_rider, #edit_profile_rider_btn").toggleClass("hide");
      alert_success("Profile Updated Successfully");
      get_profile(session_var);

    }
    else{
      $("#edit_profile_rider, #edit_profile_rider_btn").toggleClass("hide");
      alert_failure("An error occured while updating your data");
    }
  })
}
// Update Password
function update_pass_company(){
  var session_type = sessionStorage.getItem("session_type");
  var session_var = sessionStorage.getItem("session_id");

  var old_pass = $("#old_pass").val();
  var new_pass = $("#new_pass").val();

  $.ajax({
    type : 'POST',
    url : 'backend/profile.php',
    cache : false,
    data : {
      "update_password" : session_type,
      "old_pass" : old_pass,
      "new_pass" : new_pass
    },
    beforeSend : function(){
      $("#update_pass, #update_pass_btn").toggleClass("hide");

    }
  })
  .done(function(response){
    if(response == "success"){
      $("#update_pass, #update_pass_btn").toggleClass("hide");
      alert_success("Password Updated Successfully");
    }
    else{
      $("#update_pass, #update_pass_btn").toggleClass("hide");
      alert_failure("An error occured while updating your data");
    }
  })
}
// Update Profile Picture

function update_picture(formdata){
  var session_var = sessionStorage.getItem("session_id");
  if(formdata == "" || formdata == null){
  }
  else{
    $.ajax({
      type: 'POST',
      url: 'backend/profile.php',
      cache: false,
      contentType: false,
						processData: false,
      data: formdata,
      beforeSend: function(){
        $("#ImageSubmit, #ImageSubmitBtn").toggleClass("hide");
        $("#photo-warning").html("Please Wait");
      }
    })
    .done(function(response){
      if(response == "success"){
        $("#photo-warning").html("");
        $("#ImageSubmit, #ImageSubmitBtn").toggleClass("hide");
        $("#photo-success").html("");
        $("#photo-success").html("Picture Uploaded Successfully!");
        get_profile(session_var);
        // setTimeout("location.href = 'profile.php';",1000);

      }
    })
  }
}
// Get all states
function get_state(){
  $.ajax({
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
    data = JSON.parse(response);
    show_state(data);
  })
}
// Get all cities in a state
function get_city(data,city){
  var city = city;
  if(data != "" || data != null){
    $.ajax({
      type: 'POST',
      url: 'backend/location.php',
      cache: false,
      data:{
        'get_cities': data
      },
      beforeSend: function(){
        $("#edit_city").html("<option>Loading...</option>");
      }
    })
    .done(function(response){
      data = JSON.parse(response);
      show_city(data,city);
    })
  }
}
