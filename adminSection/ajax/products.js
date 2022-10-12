// get all Products
function getAllProducts(){
   $.ajax({
      url: 'backend/products.php?getProducts=all',
      type: 'GET',
      cache: false
   })
   .done(function(res){
      console.log(res);
   })
   .fail(function(res) {
      let data = JSON.parse(res);
      if(data.status === "success"){
         showProducts(data.data);
      }
      else {
         
      }
   })

}
