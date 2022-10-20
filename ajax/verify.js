// verify buyer's account
function verifyBuyer(data){
      $.ajax({
            type: 'POST',
            url: 'backend/verify.php',
            data: {
                  verify: data
            },
            beforeSend: function(){
            }
      })
      .done(function(res){
            console.log(res);
            let data = JSON.parse(res)
            if(data === "success"){
                  $('.message-box').html(`
                    <div class="p-3 text-center green">
                        <p class="color-white">You account has been activated successfully. You are being redirected to the login page</p>
                    </div>
                  `)
                  setTimeout(function(){window.location.replace('login.php')},3000);
            }
            else{
                  $('.message-box').html(`
                        <div class="p-3 text-center green">
                        <p class="color-white">You account has been activated successfully. You are being redirected to the login page</p>
                        </div>
                        `);

            }
      })
}
