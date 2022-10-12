function getCats(){
  $.ajax({
    url: 'backend/product_category.php?getAll',
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

// create new Category
function newCat(){
  let formdata = new FormData(document.getElementById('cat-form'));
  $.ajax({
    url: 'backend/product_category.php',
    type: 'POST',
    processData: false,
    contentType: false,
    data: formdata,
    beforeSend: function(){
      $("#submit").attr('disabled', 'disabled');
    }
  })
  .done(function(res) {
    $("#submit").removeAttr('disabled');
    let data = JSON.parse(res);

    if(data.status === "success"){
      getCats();
      document.getElementById('cat-form').reset();
      $(".close").click();
      alert_success("Category Created Successfully!");
    }
    else if(data.status === "exist"){
      alert_failure("Category Already Exists!");
    }
    else {
      alert_failure("Error Creating Category!")
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

// delete Category
function deleteCat(id){
  $.ajax({
    url: 'backend/product_category.php',
    type: 'POST',
    cache: false,
    data: {deleteCat: id},
    beforeSend: function(){
      $("#confirmDelete").attr('disabled', 'disabled');
    }
  })
  .done(function(res) {
    $("#confirmDelete").removeAttr('disabled');
    let data = JSON.parse(res);
    console.log(data);
    if(data.status === "success"){
      getCats();
      $(".close").click();
      alert_success("Category Deleted Successfully!")
    }
    else {
      alert_failure("Error Deleting Category!");
    }
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}

function switchCat(id, power){
  $.ajax({
    url: 'backend/product_category.php',
    type: 'POST',
    data: {
      switchCat: id,
      power: power
    },
    cache: false,
    beforeSend: function() {
      $(".switch").attr('disabled', 'disabled');
    }
  })
  .done(function(res) {
    $(".switch").removeAttr('disabled');
    let data = JSON.parse(res)
    if(data.status === "success"){
        getCats();
    }
  })
  .fail(function() {
    console.log("error");
  })

}
// edit Category
function editCat(id){
  $.ajax({
    url: 'backend/product_category.php?editCat='+id,
    type: 'GET',
    cache: false
  })
  .done(function(res){
    let data = JSON.parse(res);
    console.log(data);
    if(data.status === "success"){
      showEdit(data.data[0]);
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
// update category
function updateCat(){
  let formdata = new FormData(document.getElementById('showEdit'));
  $.ajax({
    url: 'backend/product_category.php',
    type: 'POST',
    data: formdata,
    processData: false,
    contentType: false,
    cache: false
  })
  .done(function(res) {
    let data = JSON.parse(res);
    if(data.status === "success"){
      getCats();
      $(".close").click();
      alert_success("Category Updated Successfully!");
    }
    else {
      alert_failure("Error Updating Category!");
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
