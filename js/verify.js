  let url = window.location.href;
  url = url.split('?');
  let data = url[1];
  let mail = data.split('&')[0].split('=')[1];
  let token = data.split('&')[1].split('=')[1];
  let type = data.split('&')[2].split('=')[1];

  $(document).ready(function() {
    let verify = {
      "mail": mail,
      'token': token,
      'type' : type
    };
    verifyBuyer(verify);
  });
