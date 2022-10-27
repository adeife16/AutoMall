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
// show states dropdown
  function showStates(data){
    $("#state").html(`<option value="">SELECT STATE</option>`);
    for (var i = 0; i < data.length; i++) {
      $("#state").append(`
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
  if(sessionType === "merchant"){
    picture = "img/users/"+data.merchant_id+"/"+data.logo;
    company = '<div class="form-group"> <label for="company">Company Name</label> <input type="text" class="form-control" id="company" name="company" value="'+data.company_name+'" disabled readonly></div>';
    id = data.merchant_id;
  }
  else{
    picture = data.picture;
    company = "";
    id = data.buyer_id;

  }
  $("#profile-div").html(`
    <div class="row">
      <div class="col-md-12 col-lg-12 pb-20">
        <img src="`+picture+`" class="display-pic">
        <div class="upload-btn-wrapper ml-10">
          <button class="upload-btn btn red color-white">Upload a Picture</button>
          <input type="file" name="myfile" id="upload-input">
        </div>
      </div>
      <div class="col-md-12 col-sm-12">
        <form class="form" id="profile-form" action="" method="post">
          <div class="form-group">
            <label for="id">User Name</label>
            <input type="text" class="form-control" id="id" name="id" value="`+id+`" disabled readonly>
          </div>
          <div class="form-group">
            <label for="fname">First Name</label>
            <input type="text" class="form-control" id="fname" name="fname" value="`+data.fname+`">
          </div>
          <div class="form-group">
            <label for="lname">Last Name</label>
            <input type="text" class="form-control" id="lname" name="lname" value="`+data.lname+`">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="`+data.email+`" disabled readonly>
          </div>
          `+company+`
          <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" class="form-control" id="phone" name="phone" value="`+data.phone+`">
          </div>
          <div class="form-group">
          <label for="address">Address</label>
          <textarea class="form-control" id="address" name="address">`+data.address+`</textarea>
          </div>
          <div class="form-group">
          <label for="state">State</label>
          <select class="form-control" id="state" name="state">

          </select>
          </div>
          <div class="form-group">
            <button class="btn red color-white" id="save" name="save">SAVE</button>
          </div>

        </form>
      </div>
    </div>
    `);
    getState();
    setTimeout(function(){
      $("#state option[value="+data.state+"]").attr('selected','selected');
    },3000)
}
