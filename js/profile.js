$(document).ready(function() {
  let sessionId = sessionStorage.getItem('session_id');
  // console.log(sessionId);
  if(sessionId !== ""){
    getProfile(sessionId);
  }
  else{
    window.location.replace('logout.php');
  }
});

// banks list api
const banks = {
  "url": "https://api.paystack.co/bank",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": env.paystackSecret
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false
};



// show states dropdown
  function showStates(data){
    $("#ustate").html(`<option value="">SELECT STATE</option>`);
    for (var i = 0; i < data.length; i++) {
      $("#ustate").append(`
        <option value="`+data[i].id+`">`+data[i].state_name+`</option>
        `)
    }
  }

// display profile Details
function showProfile(sessionType, data){
  console.log(data);
  let picture;
  let company;
  let id;
  let bank;


  if(sessionType === "merchant"){
    picture = "img/users/"+data.merchant_id+"/"+data.logo;
    company = '<div class="form-group"> <label for="company">Company Name</label> <input type="text" class="form-control" id="company" name="company" value="'+data.company_name+'" disabled readonly></div>';
    id = data.merchant_id;
    bank = `  <h3>Bank Details</h3>
              <div class="form-group">
              <label for="acct-name">Account Name</label>
              <input type="text" class="form-control" id="acct-name" name="acct-name" placeholder="Account Name" value="`+data.account_name+`">
              </div>
              <div class="form-group">
              <label for="acct-num">Account Number</label>
              <input type="text" class="form-control" id="acct-num" name="acct-num" placeholder="Account Number" value="`+data.account_number+`">
              </div>
              <div class="form-group">
              <label for="bank">Bank</label>
              <select class="form-control" id="bank" name="bank">

              </select>
              </div>`
  }
  else{
    picture = "img/users/"+data.buyer_id+"/"+data.picture;
    company = "";
    id = data.buyer_id;
    bank = ""

  }
  $("#profile-div").html(`
    <form class="form" id="profile-form" action="" name="profile-form" method="post">
    <div class="row">
      <div class="col-md-12 col-lg-12 pb-20">
        <img src="`+picture+`" class="display-pic">
        <div class="upload-btn-wrapper ml-10">
          <button class="upload-btn btn red color-white">Upload a Picture</button>
          <input type="file" name="myfile" id="upload-input">
        </div>
      </div>
      <div class="col-md-12 col-sm-12 mt-10">
          <input type="hidden" class="form-control" id="merchant_id" name="merchant_id" value="`+id+`">
          <div class="form-group">
            <label for="fname">First Name</label>
            <input type="text" class="form-control" id="ufname" name="ufname" value="`+data.fname+`">
          </div>
          <div class="form-group">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control" id="ulname" name="ulname" value="`+data.lname+`">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="`+data.email+`" disabled readonly>
          </div>
          `+company+`
          <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" class="form-control" id="uphone" name="uphone" value="`+data.phone+`">
          </div>
          <div class="form-group">
          <label for="address">Address</label>
          <textarea class="form-control" id="uaddress" name="uaddress">`+data.address+`</textarea>
          </div>
          <div class="form-group">
          <label for="state">State</label>
          <select class="form-control" id="ustate" name="ustate">

          </select>
          </div>
          `+bank+`
          <br>
          <div class="form-group">
            <button type="submit" class="btn red color-white" id="save" name="save">SAVE</button>
          </div>

        </form>
      </div>
    </div>
    `);
    getState();
    $.ajax(banks).done(function (response) {
      let res = JSON.parse(response);
      let bank = res.data;
      let i;
      $("#bank").html("");
      $("#bank").html("<option value=''>SELECT BANK</option>");
      for(i in bank){
        $("#bank").append(`
          <option value="`+bank[i].id+`">`+bank[i].name+`</option>
          `)

      }
    });
    setTimeout(function(){
      $("#ustate option[value="+data.state+"]").attr('selected','selected');
      $("#bank option[value="+data.bank+"]").attr('selected','selected');
    },3000);

    // validation
    $("#profile-form").validate({
      ignore: ".ignore",
      validClass: "valid",
      errorClass: "invalid",
      submitHandler: function(form) {
        let formdata = new FormData(document.getElementById('profile-form'));
        $.ajax({
          url: 'backend/profile.php',
          type: 'POST',
          processData: false,
          contentType: false,
          cache: false,
          data: formdata,
          beforeSend: function(){
            $("#save").attr("disabled", "disabled");
          }
        })
        .done(function(res){
          $("#save").removeAttr("disabled");
          // let data = JSON.parse(res);
          if(res === "success"){
                alert_success("Profile Updated");
                // setTimeout(function () {
                //   window.location.reload();
                // }, 2000);
            }
            else{
              $(".message").removeClass("hide");
            }
          })
        .fail(function() {
          console.log("error");
        })

             // $.post(
             //   'backend/signup.php',
             //   $(formdata).serialize(),
             //   function (res) {
             //      console.log(res);
             //  });
        return false;
        },
        rules: {
          myfile:{
            extension: "jpg|jpeg|png",
            maxsize: 1000000,
          },
          ufname:{
            required: true,
            minlength: 3
          },
          ulname: {
            required: true,
            minlength: 3
          },
          uphone: {
            required: true,
            pattern: /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/
            // remote: {
            //   url: "backend/validate.php",
            //   type: "post",
            //   data: {
            //     phone: function() {
            //       return $( "#phone" ).val();
            //     }
            //   }
            // }
          },
          uaddress:{
            required: true
          },
          state:{
            required: true
          }
        },
        // Specify validation error messages
        messages: {
          myfile: {
            extension: "Only jpg, jpeg and png extensions are allowed",
            maxsize: "File size limit is 1Mb"
          },
          ufname: {
            required: "Please enter your first name",
            minlength: "Enter a valid first name"
          },
          ulname:{
            required: "Please enter your last name",
            minlength: "Enter a valid last name"

          },
          uphone: {
            required: 'Please enter your phone number',
            pattern: "Please enter a valid Nigerian phone number",
            // remote: "Phone number already exists"
          },
          uaddress: {
            required: "Please enter your current address"
          },
          ustate: {
            required: "Please select your current location"
          },
        }
    });

}


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.display-pic').attr('src', e.target.result);
      $('.display-pic').fadeIn(500);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$(document).on('change', '#upload-input', function(){
  readURL(this);
})

//change password
$("#pass-form").validate({
  ignore: ".ignore",
  validClass: "valid",
  errorClass: "invalid",
  submitHandler: function(form) {
    let formdata = new FormData(document.getElementById('pass-form'));
    $.ajax({
      url: 'backend/profile.php',
      type: 'POST',
      processData: false,
      contentType: false,
      cache: false,
      data: formdata,
      beforeSend: function(){
        $("#update-pass").attr("disabled", "disabled");
      }
    })
    .done(function(res){
      $("#update-pass").removeAttr("disabled");
      let data = JSON.parse(res);
      if(data === "success"){
        alert_success("Password updated!")
        }
        else{
          // $(".message").removeClass("hide");
        }
      })
    .fail(function() {
      console.log("error");
    })
    return false;
    },
    rules: {
      oldPass:{
        required: true
      },
      newPass: {
        required: true,
        minlength: 8
      },
      conPass: {
        equalTo: "#newPass"
      }
    },
    // Specify validation error messages
    messages: {
      oldPass: {
        required: "Please enter the old password",
      },
      newPass:{
        required: "Please your new password",
        minlength: "Your password must be at least 8 characters long"

      },
      conPass:{
        equalTo: "Passwords do not match"
      }

    }
});
