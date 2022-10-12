$(document).ready(function() {
      getAllProducts();
      $("#dataTable").DataTable( {
            select: {
                style: 'multi'
            }
});
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
                      <button class="btn white switch `+power+`" type="button" value="`+data[index].id+`"><i class="fa fa-lg fa-power-off `+color+`"></i></button>
                    </td>
                    <td>`+data[index].product_id+`</td>
                    <td><img src="../images/products/"`+data[index].product_id+`/`+data[index].image1+`></td>
                    <td>`+data[index].product_name+`</td>
                    <td>`+data[index].cat_name+`</td>
                    <td>
                      <button class="btn btn-warning edit" data-toggle="modal" data-target="#editModal" value="`+data[index].id+`"><i class="fas fa-pen"></i></button>
                      <button class="btn btn-danger delete" data-toggle="modal" data-target="#deleteModal" value="`+data[index].id+`"><i class="fa fa-trash"></i></button>
                    </td>
                  </tr>

            `)
      }
}
