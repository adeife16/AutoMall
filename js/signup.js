$(document).ready(function() {
  getStates();
});
function showStates(data){
  $("#state").html();
  $("#state").append('<option value="">Select State</option>');
  for( i in data){
    $("#state").append(`
      <option value="`+data[i].id+`">`+data[i].state_name+`</option>
    `);
  }
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#image-preview').attr('src', e.target.result);
      $('#image-preview').fadeIn(500);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#picture").change(function() {
    readURL(this);

});
