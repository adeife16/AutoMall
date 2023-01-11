$(document).ready(function() {
  $("#form-card").hide();
  getCat();
});

// show all cateegories
function showCat(data){
  $("#cat").html(`<option value="">Select Category</option>`);
  for(index in data){
    $("#cat").append(`
    <option value="`+data[index].id+`">`+data[index].cat_name+`</option>
    `)
  }
}
// show all sub cateegories
function showSubCat(data){
  if(data.length != 0){
    $("#sub-cat").html(`<option value="">Select Sub-category</option>`);
    for(index in data){
      $("#sub-cat").append(`
      <option value="`+data[index].id+`">`+data[index].sub_cat_name+`</option>
      `)
    }
  }

  $("#sub-cat").removeAttr("disabled");
}

// clicking next button
function next(){
  let cat = $("#cat").val();
  let subCat = $("#sub-cat").val();

  if(cat == "1"){
    vehicle(subCat);
  }
  else if(cat == "part"){
    part()
  }
  else if(cat == "ass"){
    ass()
  }
  else{

  }

}

// clicking cancel button
function cancel(){
  $("#form-card").hide(1000)
      setTimeout(() =>{
        $("#control").show(1000)
      },2000)
}

// generate forms for vehicles
function vehicle(){
  let subCat = $("#sub-cat").val();

    if(subCat == "1"){
      car(); 
    }


}


// display dropdown for am_makes
function showMakes(data){
  $("#makes").html(``)
  $("#makes").append(`<option value="">Make</option>`)
  for(let index in data){
    $("#makes").append(`
      <option value="`+data[index].make_id+`">`+data[index].make_name+`</option>
      `)
  }
  $('.makes').select2();
  $(".makes").on('change', function(e){
    $("#models, #years, #trims").html("");
      clearOthers()
    let data = $("#makes").val();
    if(data != ""){
      getModels(data);
    }
  });
}
// display dropdown for models
function showModels(data){
  $("#models").html(``)
  // $("#models").append(`<option value="">Model</option>`)
  for(let index in data){
    $("#models").append(`
      <option value="`+data[index].model_id+`">`+data[index].model_name+`</option>
      `)
  }
  $('.models').select2();
  getYears($("#models").val());
  $(".models").on('change', function(e){
      clearOthers()
    let data = $("#models").val();
    if(data != ""){
      getYears(data);
    }
  });
}
// display dropdown for years
function showYears(data){
  $("#years").html(``)
  // $("#years").append(`<option value="">Year</option>`)
  for(let index in data){
    $("#years").append(`
      <option value="`+data[index].year_id+`">`+data[index].year+`</option>
      `)
  }
  $('.years').select2();
  getTrims($("#years").val())
  $(".years").on('change', function(e){
      clearOthers()
    let data = $("#years").val();
    if(data != ""){
      getTrims(data);
    }
  });
}
// display dropdown for trims
function showTrims(data){
  $("#trims").html(``)
  // $("#trims").append(`<option value="">Trim</option>`)
  for(let index in data){
    $("#trims").append(`
      <option value="`+data[index].trim_id+`">`+data[index].trim_level+`</option>
      `)
  }
  getOthers($("#trims").val());
  $('.trims').select2();
  $(".trims").one('change', function(e){
      clearOthers()
    let data = $("#trims").val();
      getOthers(data);
  });
}

// clear remaining inputs
function clearOthers(){
  $("#cylinder").val("")
  $("#drive").find("option[value='']").prop('selected', true);
  $("#fuel").val("")
  $("#hp").val("")
  $("#seat").val("")
  $("#type").val("")
}
// fill remaining inputs
function showOthers(data){
  // $("#drive option[value='"+data.drive+"']").attr('selected','selected');
  $("#type").val(data[0].type)
  $("#fuel").val(data[1].fuel)
  $("#drive").find("option[value='" + data[2].drive + "']").prop('selected', true);
  $("#seat").val(data[3].seat)
  $("#cylinder").val(data[4].cylinder)
  $("#hp").val(data[5].hp)
}

// show color dropdown
function showColors(data){
  $("#color").html("<option>Select Color</option>")

  for(i in data){
      $("#color").append(`
      <option value="`+data[i].color_id+`">`+data[i].color+`</option>
    }
    `)
  }
}

// show color dropdown
function showStates(data){
  $("#location").html("<option>Select Location</option>")

  for(i in data){
      $("#location").append(`
      <option value="`+data[i].id+`">`+data[i].state_name+`</option>
    }
    `)
  }
}
// control category action
function change(){
  getSubCat($("#cat").val())

    // $("#sub-cat").removeAttr('disabled')
}


// submit product form to backend
function post(post) {
  var form = new FormData(document.getElementById("product-form"));
  if($("#makes").val() == "" || $("#models").val() == "" || $("#years").val() == ""){
    alert_failure("Fill the required form fields!")
  }
  else{
    var obj = [];
    for(index in post){
      obj.push(
        {
          "name": post[index].FileName,
          "type": post[index].MimeType,
          "base64": post[index].Base64
        }
      );
    }
    $.ajax({
      url: 'backend/create_product.php',
      type: 'POST',
      data: form,
      contentType: false,
      processData: false,
    })
    .done(function(res) {
      let data = JSON.parse(res)

      if(data.status == "success"){
        let id = data.data;
        // upload Pictures
        $.ajax({
          url: 'backend/create_product.php',
          type: 'POST',
          data: {
            savepictures: obj,
            id: id
          }
        })
        .done(function(res){
          res = JSON.parse(res);
          console.log(res);
          if(res.status == "success"){
            alert_success("Product Created Successfully!")
            setTimeout(function(){
              window.location.replace("products.php");
            },3000);
          }
          else{
              alert_failure("Error occured while creating product")
          }
        })
        .fail(function() {
          console.log("error");
        })
      }
    })
    .fail(function() {
      console.log("error");
    })
  }
}

// create image loader instance
function activate(){
      // Create image loader plugin
        var imagesloader = $('[data-type=imagesloader]').imagesloader({
          maxFiles: 10
          , minSelect: 5
        });

        //Form
        $frm = $('#product-form');

        // Form submit
        $(document).on('click', '#post', function (e) {


          var files = imagesloader.data('format.imagesloader').AttachmentArray;

          var il = imagesloader.data('format.imagesloader');

          if (il.CheckValidity())
          post(files);
          // console.log(files);

          e.preventDefault();
          e.stopPropagation();
        });
}













function cylinder(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'cylinder': data
        };
        saveCylinder(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);
    });
}


function saveCylinder(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      cylinder: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}


function type(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'type': data
        };
        saveType(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);

    });
}


function saveType(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      type: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}

function size(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'size': data
        };
        saveSize(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);
    });
}


function saveSize(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      size: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}


function fuel(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'fuel': data
        };
        saveFuel(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);

    });
}


function saveFuel(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      fuel: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}


function drive(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'drive': data
        };
        saveDrive(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);

    });
}


function saveDrive(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      drive: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}



function seat(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'seat': data
        };
        saveseat(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);

    });
}


function saveseat(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      seat: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}



function hp(url, trim){
var list = {
          'cache': false,
          'dataType': "json",
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
      }
    $.ajax(list).done(function(res) {
        let data = res.data;
        // console.log(data);
        let object = {
          'trim': trim,
          'hp': data
        };
        savehp(object);
    });
    $.ajax(list).fail(function(){
      fail.add(trim);
      sessionStorage.setItem("failed", fail);

    });
}


function savehp(data){
  $.ajax({
    url: 'backend/profile.php',
    type: 'POST',
    data: {
      hp: data
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
}
