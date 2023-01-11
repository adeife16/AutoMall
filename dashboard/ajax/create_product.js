// get all categories
function getCat(){
  $.ajax({
    type: 'GET',
    url: 'backend/create_product.php?get_category=all'
  })
  .done(function(res){
    let data = JSON.parse(res);
    if(data.status == "success"){
      showCat(data.data)
    }
  })
}
function getSubCat(id){
  $.ajax({
    type: 'GET',
    url: 'backend/create_product.php?get_sub_category='+id
  })
  .done(function(res){
    let data = JSON.parse(res);
    if(data.status == "success"){
      showSubCat(data.data)
    }
  })
}

// get all makes
function getMakes(){
  $.ajax({
    url: 'backend/create_product.php?get_make=all',
    type: 'GET',
  })
  .done(function(res) {
    // console.log(res);
    let data = JSON.parse(res);
    if(data.status == "success"){
      showMakes(data.data);
    }
    else{

    }
  })
  .fail(function() {
    console.log("error");
  })
}


// get models for makes
function getModels(id){
  $.ajax({
    url: 'backend/create_product.php?get_model='+id,
    type: 'GET',
  })
  .done(function(res) {
    console.log(res);
    let data = JSON.parse(res);
    if(data.status == "success"){
      showModels(data.data);
    }
    else{

    }
  })
  .fail(function() {
    console.log("error");
  })
}

// get year for models
function getYears(id){
  $.ajax({
    url: 'backend/create_product.php?get_year='+id,
    type: 'GET',
  })
  .done(function(res) {
    let data = JSON.parse(res);
    console.log(data);
    if(data.status == "success"){
      showYears(data.data);
    }
    else{

    }
  })
  .fail(function() {
    console.log("error");
  })

}

// get trims for year
function getTrims(id){
  $.ajax({
    url: 'backend/create_product.php?get_trim='+id,
    type: 'GET',
  })
  .done(function(res) {
    let data = JSON.parse(res);
    console.log(data);
    if(data.status == "success"){
      showTrims(data.data);
    }
    else{

    }
  })
  .fail(function() {
    console.log("error");
  })
}
// get other details for trim
function getOthers(id){
  $.ajax({
    url: 'backend/create_product.php?get_others='+id,
    type: 'GET',
  })
  .done(function(res) {
    let data = JSON.parse(res);
    console.log(data);
    if(data.status == "success"){
      if(data.data.length != 0){
        showOthers(data.data);
      }
      else {
        clearOthers()
      }
    }
    else{
      clearOthers()
    }
  })
  .fail(function() {
    console.log("error");
  })
}
// get colors
function getColors(){
  $.ajax({
    url: 'backend/create_product.php?colors=all',
    type: 'GET',
  })
  .done(function(res){
    let data = JSON.parse(res);
    if(data.status == "success"){
      showColors(data.data);
    }
  })
  .fail(function() {
    console.log("error");
  })
}
// get colors
function getStates(){
  $.ajax({
    url: 'backend/location.php?states=all',
    type: 'GET',
  })
  .done(function(res){
    let data = JSON.parse(res);
    showStates(data)
  })
  .fail(function() {
    console.log("error");
  })

}
