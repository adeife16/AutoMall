<?php
  require_once 'backend/config.php';
?>
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

          // console.log(res);
          // let url;
          // let i=98;
          // let i=0;
              // url = 'https://jiji.ng/get_attribute_choices/1362?parent_value_id='+res[0].trim_id;
              // url = 'https://jiji.ng/get_attribute_choices/1363?parent_value_id='+res[i].trim_id;
              url = 'https://jiji.ng/get_attribute_choices/1164?parent_value_id='+res[0].trim_id;
              // url2 = 'https://jiji.ng/get_attribute_choices/1165?parent_value_id='+res[i].trim_id;
              // url3 = 'https://jiji.ng/get_attribute_choices/1166?parent_value_id='+res[i].trim_id;
              // url4 = 'https://jiji.ng/get_attribute_choices/1167?parent_value_id='+res[i].trim_id;
              // url5 = 'https://jiji.ng/get_attribute_choices/1372?parent_value_id='+res[i].trim_id;
              setTimeout(function() {
                type(url, res[0].trim_id, id);
              },5000)
            }
        })
      }

          function type(url, trim, id){
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
                    'type': data
                  };
                  saveType(object, id);
              });
              $.ajax(list).fail(function(){
                setTimeout(function(){
                  type(url, trim, id);
                },5000)
              });
          }

          function saveType(data, id){
            $.ajax({
              url: 'backend/profile.php',
              type: 'POST',
              data: {
                type: data
              }
            })
            .done(function(res) {
              console.log(res);
              getTrim(id+1)

            })
            .fail(function() {
              saveType(data, id);
              console.log("error");
            });
          }

setTimeout(function(){

  getTrim(parseInt(sessionStorage.getItem('current')));
  // getTrim(1);
},5000)
setTimeout(function(){
    console.clear()
},3600000)
let colors = [
          {
            "id_name": 5459,
            "value": "Black"
          },
          {
            "id_name": 5469,
            "value": "Silver"
          },
          {
            "id_name": 5463,
            "value": "Gray"
          },
          {
            "id_name": 5470,
            "value": "White"
          },
          {
            "id_name": 5460,
            "value": "Blue"
          },
          {
            "id": 5458,
            "id_name": 5458,
            "value": "Beige"
          },
          {
            "id": 5459,
            "id_name": 5459,
            "value": "Black"
          },
          {
            "id": 5460,
            "id_name": 5460,
            "value": "Blue"
          },
          {
            "id": 5461,
            "id_name": 5461,
            "value": "Brown"
          },
          {
            "id": 1270472,
            "id_name": 1270472,
            "value": "Burgandy"
          },
          {
            "id": 5462,
            "id_name": 5462,
            "value": "Gold"
          },
          {
            "id": 5463,
            "id_name": 5463,
            "value": "Gray"
          },
          {
            "id": 5464,
            "id_name": 5464,
            "value": "Green"
          },
          {
            "id": 1270473,
            "id_name": 1270473,
            "value": "Ivory"
          },
          {
            "id": 1270474,
            "id_name": 1270474,
            "value": "Matt Black"
          },
          {
            "id": 1270476,
            "id_name": 1270476,
            "value": "Off white"
          },
          {
            "id": 5465,
            "id_name": 5465,
            "value": "Orange"
          },
          {
            "id": 1128154,
            "id_name": 1128154,
            "value": "Pearl"
          },
          {
            "id": 5466,
            "id_name": 5466,
            "value": "Pink"
          },
          {
            "id": 5467,
            "id_name": 5467,
            "value": "Purple"
          },
          {
            "id": 5468,
            "id_name": 5468,
            "value": "Red"
          },
          {
            "id": 5469,
            "id_name": 5469,
            "value": "Silver"
          },
          {
            "id": 1270475,
            "id_name": 1270475,
            "value": "Teal"
          },
          {
            "id": 5470,
            "id_name": 5470,
            "value": "White"
          },
          {
            "id": 5471,
            "id_name": 5471,
            "value": "Yellow"
          },
          {
            "id": 5472,
            "id_name": 5472,
            "value": "Other"
          }
];

let i = 0;
setInterval(function(){
  // send(colors[i]);

  i++;
},3000);


function send(obj){
  $.ajax({
    url: 'inser.php',
    type: 'POST',
    data: {color: obj}
  })
  .done(function(res){
    console.log(res);
  })

}
    </script>
  </head>
  <body>
    <?php
      if (isset($_POST['color'])) {
        $color = $_POST['color'];
        $id = $color['id_name'];
        $name = $color['value'];
          $stmt = "INSERT INTO am_color(color_id, color) VALUES(?,?)";
          $save = mysqli_prepare($con, $stmt);
          mysqli_stmt_bind_param($save, 'is', $id, $name);
          if(mysqli_execute($save))
          {
            print $name . " is saved \n";
          }
          else
          {
            print $name . " is not saved \n";
            print mysqli_error($con);
          }
      }
     ?>

  </body>
</html>
