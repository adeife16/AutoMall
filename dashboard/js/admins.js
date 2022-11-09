
$(document).ready(function() {
  getAllAdmins();
});

// display Admins
function showAdmins(data){
  $("#display-product").html('');
  let power;
  let color;
  for(index in data){
    if(data[index].status === "active"){
      color = 'color-green';
      power = 'disabled';
    }
    else{
      color = 'color-red';
      power = 'active';
    }
    $("#display-product").append(`
      <tr>
        <td>
          <button class="btn white switch `+power+`" type="button" value="`+data[index].id+`"><i class="fa fa-lg fa-power-off `+color+`"></i></button>
        </td>
        <td>
          <img src="img/`+data[index].picture+`" class="table-img">
        </td>
        <td>
          `+data[index].first_name+` `+data[index].last_name+`
        </td>
        <td>
          `+data[index].email+`
        </td>
        <td>
          `+data[index].role+`
        </td>
        <td>
          `+data[index].date_created+`
        </td>

      `)
  }
}
// image preview
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#img-preview').attr('src', e.target.result);
      $('#img-preview').hide();
      $('#img-preview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#picture").change(function() {
  readURL(this);
});

// 
