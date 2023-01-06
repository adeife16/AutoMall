<?php  ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  <script src="vendor/jquery/jquery.min.js"></script>
    <script type="text/javascript">


      function getTrim(id){
        $.ajax({
          url: 'backend/profile.php?gettrims='+id,
          type: 'GET'
        })
        .done(function(res) {
          // console.log("success");
          res = JSON.parse(res);
          if(res.length == 0){
            getTrim(id+1);
          }
          else{
          let url;
          // let i=98;
          // let i=0;
              url = 'https://jiji.ng/get_attribute_choices/1362?parent_value_id='+res[0].trim_id;
              // url0 = 'https://jiji.ng/get_attribute_choices/1363?parent_value_id='+res[i].trim_id;
              // url1 = 'https://jiji.ng/get_attribute_choices/1164?parent_value_id='+res[i].trim_id;
              // url2 = 'https://jiji.ng/get_attribute_choices/1165?parent_value_id='+res[i].trim_id;
              // url3 = 'https://jiji.ng/get_attribute_choices/1166?parent_value_id='+res[i].trim_id;
              // url4 = 'https://jiji.ng/get_attribute_choices/1167?parent_value_id='+res[i].trim_id;
              // url5 = 'https://jiji.ng/get_attribute_choices/1372?parent_value_id='+res[i].trim_id;
              setTimeout(function() {
                cylinder(url, res[0].trim_id, id);
              },5000)
            }
        })
      }

          function cylinder(url, trim, id){
            sessionStorage.setItem("current", id);
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
                  saveCylinder(object, id);
              });
              $.ajax(list).fail(function(){
                setTimeout(function(){
                  cylinder(url, trim, id);
                },5000)
              });
          }

          function saveCylinder(data, id){
            $.ajax({
              url: 'backend/profile.php',
              type: 'POST',
              data: {
                cylinder: data
              }
            })
            .done(function(res) {
              console.log(res);
              getTrim(id+1)

            })
            .fail(function() {
              saveCylinder(data, id);
              console.log("error");
            });
          }

setTimeout(function(){

  // getTrim(parseInt(sessionStorage.getItem("current")));
  // getTrim(4616)
},5000)
setTimeout(function(){
    console.clear()
},36000000)
    </script>
  </head>
  <body>

  </body>
</html>
