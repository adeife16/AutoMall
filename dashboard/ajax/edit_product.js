function getProduct(id){
    $.ajax({
        type: 'GET',
        url: 'backend/products.php?getproduct='+id
    })
    .done(function(res){
        let data = JSON.parse(res)
        if(data.status == "sucess"){
            showProduct(data.data[0]);
        }
        console.log(data);
    })
}