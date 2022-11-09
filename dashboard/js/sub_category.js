$(document).ready(function() {
  getSubcats();

});


// display category Dropdown
function showCats(data){
  $("#cat-name").html('');
  for(index in data){
    $("#cat-name").append(`
      <option value="`+data[index].id+`">`+data[index].cat_name+`</option>
    `)
  }
}

// display all subcategories
function showSubcats(data){
  $("#display-sub-cat").html("");
  for(index in data){
    $("#display-sub-cat").append(`
      <tr>
        <td>`+data[index].sub_cat_name+`</td>
        <td>`+data[index].cat_name+`</td>
        <td>
          <button class="btn btn-warning edit" data-toggle="modal" data-target="#editModal" value="`+data[index].id+`"><i class="fas fa-pen"></i></button>
          <button class="btn btn-danger delete" data-toggle="modal" data-target="#deleteModal" value="`+data[index].id+`"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `)
  }
  $("#dataTable").DataTable( {
        select: {
            style: 'multi'
        }
  });
}
// display edit form
function showEdit(data, cats){
  let cat="";
  for(index in cats){
    cat += `<option value="`+cats[index].id+`">`+cats[index].cat_name+`</option>`;
  }
  $("#showEdit").html(`
        <div class="form-group">
          <input type="hidden" value="`+data.id+`" name="cat-id">
          <span for="edit-cat-name">Category Name</span>
          <input type="text" name="edit-cat-name" class="form-control" id="edit-cat-name" value="`+data.sub_cat_name+`" placeholder="Category Name">
        </div>
        <div class="form-group">
          <span for="edit-cat">Category</span>
          <select class="form-control" name="edit-cat" id="edit-cat">
          `+cat+`
          </select>
        </div>
        <div class="form-group">
          <button type="button" class="btn blue color-white" id="edit-submit" name="submit">SUBMIT</button>
        </div>
    `);
    setTimeout(function(){
      $("#edit-cat option[value='"+data.cat_id+"']").attr('selected','selected');
    },1000);
}

// event Listeners
// add new sub category
$("#add").click(function(event) {
  event.preventDefault();
  getCats();
});
$("#submit").click(function(event) {
  event.preventDefault();
  newSubCat();
});
// click edit button
$(document).on('click', '.edit', function(event) {
  event.preventDefault();
  editSubCat($(this).val());
});
