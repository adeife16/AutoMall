let url = window.location.href;
let product = url.split('?')[1].split('=')[2];


$(document).ready(function() {
  getProduct(product);
});
