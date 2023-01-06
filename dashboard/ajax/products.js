// get all Products
function getAllProducts(){
   $.ajax({
      url: 'backend/products.php?getproducts=all',
      type: 'GET',
      cache: false
   })
   .done(function(res){
      let data = JSON.parse(res);
      console.log(data);
      if(data.status === "success"){
         showProducts(data.data);
      }
      else {

      }
   })
   .fail(function(res) {
   })

}
