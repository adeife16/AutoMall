$(document).ready(function() {
  getCats();
  $("#dataTable").DataTable( {
        select: {
            style: 'multi'
        }
  });

});

// show Categories
function showCats(data){
  $("#display-cat").html('');
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
    $("#display-cat").append(`
      <tr>
        <td>
          <button class="btn white switch `+power+`" type="button" value="`+data[index].id+`"><i class="fa fa-lg fa-power-off `+color+`"></i></button>
        </td>
        <td>`+data[index].cat_name+`</td>
        <td>23</td>
        <td>34645</td>
        <td>
          <button class="btn btn-warning edit" data-toggle="modal" data-target="#editModal" value="`+data[index].id+`"><i class="fa fa-pen"></i></button>
          <button class="btn btn-danger delete" data-toggle="modal" data-target="#deleteModal" value="`+data[index].id+`"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `);
  }
}
// display edit form
function showEdit(data){
  $("#showEdit").html(`
          <div class="form-group">
            <input type="hidden" value="`+data.id+`" name="cat-id">
            <span for="edit-cat-name">Category Name</span>
            <input type="text" name="edit-cat-name" class="form-control" id="edit-cat-name" value="`+data.cat_name+`" placeholder="Category Name">
          </div>
          <div class="form-group">
            <button type="button" class="btn blue color-white" id="edit-submit" name="submit">SUBMIT</button>
          </div>
    `)
}

// Event Listeners

// submit form
$("#submit").click(function(event) {
  event.preventDefault();
  if($("#cat-name").val() != ""){
    newCat();
  }
});
// delete category
$(document).on('click', '.delete', function(e){
  e.preventDefault();
  $("#confirmDelete").val($(this).val());

  $("#confirmDelete").click(function(event) {
    event.preventDefault();
    deleteCat($(this).val());
  });
})
// switch cat status
$(document).on('click', '.switch', function(e){
  e.preventDefault();
  if($(this).hasClass('active')){
    switchCat($(this).val(), 'active');
  }
  else{
    switchCat($(this).val(), 'disabled');
  }
})
// edit Category
$(document).on('click', '.edit', function(event) {
  event.preventDefault();
  editCat($(this).val());
});

// update category
$(document).on('click', '#edit-submit', function(event) {
  event.preventDefault();
  updateCat();
});
