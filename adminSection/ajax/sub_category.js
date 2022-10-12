// get all sub categories
function getSubcats(){
  $.ajax({
    url: 'backend/sub_category.php?getAllSubCats',
    type: 'GET',
    cache: false
  })
  .done(function(res) {

    let data = JSON.parse(res);
    if(data.status === "success"){
      showSubcats(data.data)
    }
  })
  .fail(function() {
    console.log("error");
  })
}
// get categories
function getCats(){
  $.ajax({
    url: 'backend/sub_category.php?getAll',
    type: 'GET',
    cache: false
  })
  .done(function(res) {
    let data = JSON.parse(res);
    if(data.status === "success"){
      if(data.data.length != 0){
        showCats(data.data);
      }
    }
  })
  .fail(function() {
    console.log("error");
  })
}
// create new sub Category
function newSubCat(){
  let formdata = new FormData(document.getElementById('sub-cat-form'));
  $.ajax({
    url: 'backend/sub_category.php',
    type: 'POST',
    data: formdata,
    processData: false,
    contentType: false,
    cache: false,
    beforeSend: function(){
      $("#submit").attr('disabled', 'disabled');
    }
  })
  .done(function(res){
    $("#submit").removeAttr('disabled');
    let data = JSON.parse(res);
    if(data.status === "success"){
      getSubcats();
      document.getElementById('sub-cat-form').reset();
      $(".close").click();
      alert_success("Sub Category Created Successfully!");
    }
  })
  .fail(function() {
    console.log("error");
  })

}

// edit Sub Category
function editSubCat(id){
  $.ajax({
    url: 'backend/sub_category.php?getSubCat='+id,
    type: 'GET',
    cache: false,
  })
  .done(function(res){
    let data = JSON.parse(res);
    console.log(data);
    if(data.status === "success"){
      showEdit(data.data[0], data.categories);
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
