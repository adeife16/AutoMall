// buyer signup
  $("#signup-form").validate({
    ignore: ".ignore",
    validClass: "valid",
    errorClass: "invalid",
    submitHandler: function(form) {
      let formdata = new FormData(document.getElementById('signup-form'));
      $.ajax({
        url: 'backend/signup.php',
        type: 'POST',
        processData: false,
        contentType: false,
        cache: false,
        data: formdata,
        beforeSend: function(){
          $("#signup").attr("disabled", "disabled");
        }
      })
      .done(function(res){
        $("#signup").removeAttr("disabled");
        let data = JSON.parse(res);
        if(data === "success"){
          // console.log(data);
          $(".contain").html(`
              <div class="p-3 text-center green">
                  <p class="color-white">Account created successfully. Check your mail for futher instructions in activating your account</p>
              </div>
            `)
          }
          else{
            $(".message").removeClass('hide');
          }
      })
      .fail(function() {
        console.log("error");
      })
           // $.post(
           //   'backend/signup.php',
           //   $(formdata).serialize(),
           //   function (res) {
           //      console.log(res);
           //  });
      return false;
      },
      rules: {
        fname:{
          required: true,
          minlength: 3
        },
        lname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              email: function() {
                return $( "#email" ).val();
              }
            }
          }
        },
        pass: {
          required: true,
          minlength: 8
        },
        conPass:{
          required: true,
           equalTo: "#pass"
        },
        phone: {
          required: true,
          pattern: /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              phone: function() {
                return $( "#phone" ).val();
              }
            }
          }
        },
        address:{
          required: true
        },
        state:{
          required: true
        },
        picture:{
          required: true,
          extension: "jpg|jpeg|png",
          maxsize: 1000000,
        }
      },
      // Specify validation error messages
      messages: {
        fname: {
          required: "Please enter your first name",
          minlength: "Enter a valid first name"
        },
        lname:{
          required: "Please enter your last name",
          minlength: "Enter a valid last name"

        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        conPass:{
          required: "Passwords do not match",
          equalTo: "Passwords do not match",
        },
        email:{
          required: "Please enter a valid email address",
          email: "Please enter a valid email address",
          remote: "Email address already exists"
        },
        phone: {
          required: 'Please enter your phone number',
          pattern: "Please enter a valid Nigerian phone number",
          remote: "Phone number already exists"
        },
        address: {
          required: "Please enter your current address"
        },
        state: {
          required: "Please select your current location"
        },
        picture:{
          required: "Please upload your picture",
          extension: "Only jpg, jpeg and png extensions are allowed",
          maxsize: "File size limit is 1Mb"
        }
      }
  });
  // merchant signup validation
  $("#merchant-signup-form").validate({
    ignore: ".ignore",
    validClass: "valid",
    errorClass: "invalid",
    submitHandler: function(form) {
      let formdata = new FormData(document.getElementById('merchant-signup-form'));
      $.ajax({
        url: 'backend/merchant_signup.php',
        type: 'POST',
        processData: false,
        contentType: false,
        cache: false,
        data: formdata,
        beforeSend: function(){
          $("#signup").attr("disabled", "disabled");
        }
      })
      .done(function(res){
        $("#signup").removeAttr("disabled");
        let data = JSON.parse(res);
        if(data === "success"){
          $(".contain").html(`
              <div class="p-3 text-center green">
                  <p class="color-white">Account created successfully. Check your mail for futher instructions in activating your account</p>
              </div>
            `)
          }
          else{
            $(".message").removeClass("hide");
          }
        })
      .fail(function() {
        console.log("error");
      })

           // $.post(
           //   'backend/signup.php',
           //   $(formdata).serialize(),
           //   function (res) {
           //      console.log(res);
           //  });
      return false;
      },
      rules: {
        fname:{
          required: true,
          minlength: 3
        },
        lname: {
          required: true,
          minlength: 3
        },
        company: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              email: function() {
                return $( "#email" ).val();
              }
            }
          }
        },
        pass: {
          required: true,
          minlength: 8
        },
        conPass:{
          required: true,
           equalTo: "#pass"
        },
        phone: {
          required: true,
          pattern: /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              phone: function() {
                return $( "#phone" ).val();
              }
            }
          }
        },
        address:{
          required: true
        },
        state:{
          required: true
        },
        logo:{
          required: true,
          extension: "jpg|jpeg|png",
          maxsize: 1000000,
        }
      },
      // Specify validation error messages
      messages: {
        fname: {
          required: "Please enter your first name",
          minlength: "Enter a valid first name"
        },
        lname:{
          required: "Please enter your last name",
          minlength: "Enter a valid last name"

        },
        company:{
          required: "Please enter your company name",
          minlength: "Enter a valid company name"

        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        conPass:{
          required: "Passwords do not match",
          equalTo: "Passwords do not match",
        },
        email:{
          required: "Please enter a valid email address",
          email: "Please enter a valid email address",
          remote: "Email address already exists"
        },
        phone: {
          required: 'Please enter your phone number',
          pattern: "Please enter a valid Nigerian phone number",
          remote: "Phone number already exists"
        },
        address: {
          required: "Please enter your current address"
        },
        state: {
          required: "Please select your current location"
        },
        logo:{
          required: "Please upload your company logo",
          extension: "Only jpg, jpeg and png extensions are allowed",
          maxsize: "File size limit is 1Mb"
        }
      }
  });
  // profile validation
  $("#merchant-signup-form").validate({
    ignore: ".ignore",
    validClass: "valid",
    errorClass: "invalid",
    submitHandler: function(form) {
      let formdata = new FormData(document.getElementById('merchant-signup-form'));
      $.ajax({
        url: 'backend/merchant_signup.php',
        type: 'POST',
        processData: false,
        contentType: false,
        cache: false,
        data: formdata,
        beforeSend: function(){
          $("#signup").attr("disabled", "disabled");
        }
      })
      .done(function(res){
        $("#signup").removeAttr("disabled");
        let data = JSON.parse(res);
        if(data === "success"){
          $(".contain").html(`
              <div class="p-3 text-center green">
                  <p class="color-white">Account created successfully. Check your mail for futher instructions in activating your account</p>
              </div>
            `)
          }
          else{
            $(".message").removeClass("hide");
          }
        })
      .fail(function() {
        console.log("error");
      })

           // $.post(
           //   'backend/signup.php',
           //   $(formdata).serialize(),
           //   function (res) {
           //      console.log(res);
           //  });
      return false;
      },
      rules: {
        fname:{
          required: true,
          minlength: 3
        },
        lname: {
          required: true,
          minlength: 3
        },
        company: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              email: function() {
                return $( "#email" ).val();
              }
            }
          }
        },
        pass: {
          required: true,
          minlength: 8
        },
        conPass:{
          required: true,
           equalTo: "#pass"
        },
        phone: {
          required: true,
          pattern: /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/,
          remote: {
            url: "backend/validate.php",
            type: "post",
            data: {
              phone: function() {
                return $( "#phone" ).val();
              }
            }
          }
        },
        address:{
          required: true
        },
        state:{
          required: true
        },
        logo:{
          required: true,
          extension: "jpg|jpeg|png",
          maxsize: 1000000,
        }
      },
      // Specify validation error messages
      messages: {
        fname: {
          required: "Please enter your first name",
          minlength: "Enter a valid first name"
        },
        lname:{
          required: "Please enter your last name",
          minlength: "Enter a valid last name"

        },
        company:{
          required: "Please enter your company name",
          minlength: "Enter a valid company name"

        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        conPass:{
          required: "Passwords do not match",
          equalTo: "Passwords do not match",
        },
        email:{
          required: "Please enter a valid email address",
          email: "Please enter a valid email address",
          remote: "Email address already exists"
        },
        phone: {
          required: 'Please enter your phone number',
          pattern: "Please enter a valid Nigerian phone number",
          remote: "Phone number already exists"
        },
        address: {
          required: "Please enter your current address"
        },
        state: {
          required: "Please select your current location"
        },
        logo:{
          required: "Please upload your company logo",
          extension: "Only jpg, jpeg and png extensions are allowed",
          maxsize: "File size limit is 1Mb"
        }
      }
  });
