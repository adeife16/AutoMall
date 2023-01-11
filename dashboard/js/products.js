$(document).ready(function() {
      getAllProducts();
//       $("#dataTable").DataTable( {
//             select: {
//                 style: 'multi'
//             }
// });
})
// show all products
function showProducts(data){
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
                      <button class="btn white switch `+power+`" type="button" value="`+data[index].product_id+`" onclick=changeStatus(`+data[index].produc_id+`, `+power+`)><i class="fa fa-lg fa-power-off `+color+`"></i></button>
                    </td>
                    <td><img src="../img/product/`+data[index].user_id+`/`+data[index].picture+`" class="table-image"></td>
                    <td>`+data[index].make_name+`</td>
                    <td>`+data[index].model_name+`</td>
                    <td>`+data[index].year+`</td>
                    <td>`+data[index].cat_name+`</td>
                    <td>`+nairaConvert(data[index].product_price)+`</td>
                    <td>
                      <button class="btn btn-warning edit" data-toggle="modal" data-target="#editModal" value="`+data[index].product_id+`"><a href="edit_product.php?action=edit&product_id=`+data[index].product_id+`" class="color-white"><i class="fas fa-pen"></i></a></button>
                      <button class="btn btn-danger delete" data-toggle="modal" data-target="#deleteModal" value="`+data[index].product_id+`"><i class="fa fa-trash"></i></button>
                    </td>
                  </tr>

            `)
      }
}
