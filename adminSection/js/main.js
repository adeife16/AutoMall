$(document).ready(function() {
  getSession();
  setLogoutTimer();

});

// get session details from backend
function getSession(){
  $.ajax({
    url: 'backend/session.php?getSession',
    type: 'GET',
    cache: false,
  })
  .done(function(response) {
    // if response status is success, create session variables
    data = JSON.parse(response);
    if(data[0].status == "success"){
      var session_details = data[1];
      setSession(session_details);
    }
    else{
      sessionStorage.clear();
      window.location.replace ('logout.php');
    }
    });
    // .fail(function() {
    //   console.log("error");
    // })
    // .always(function() {
    //   console.log("complete");
    // });

  }

  function setSession(session_details){
    if(session_details === null){
      window.location.replace ('logout.php');
    }
    else{
      for(var index in session_details) {
        sessionStorage.setItem(index, session_details[index]);
      }
    }
    var sessionId = sessionStorage.getItem("session_id");
    var sessionType = sessionStorage.getItem("session_type");
    if(sessionId == "" || sessionId === null){

      window.location.replace ('logout.php');

    }
    else{
      // user dtails in header
      $("#session-name").html(sessionStorage.getItem("session_name"))
      $("#session-image").attr("src", "img/"+sessionStorage.getItem("session_picture"))
    }
  }

function setLogoutTimer() {
var myTimeout;
if (window.sessionStorage) {

    myTimeout = sessionStorage.timeoutVar;
    if (myTimeout) {
        clearTimeout(myTimeout);
    }

}

myTimeout = setTimeout(function () { logoutNow(); }, 1800000);  //adjust the time.
if (window.sessionStorage) {
    sessionStorage.timeoutVar = myTimeout;
}
}

function logoutNow() {
if (window.sessionStorage) {
    sessionStorage.timeoutVar = null;
}
//MAKE AN AJAX CALL HERE THAT WILL CALL YOUR FUNCTION IN
// CONTROLLER AND RETURN A URL TO ANOTHER PAGE
      sessionStorage.clear();

window.location.replace('logout.php')
}
