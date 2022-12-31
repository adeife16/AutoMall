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
    url: '/path/to/file',
    type: 'default GET (Other values: POST)',
    dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    data: {param1: 'value1'}
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
