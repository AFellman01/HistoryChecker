

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function checkLoginState() {
      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });
  }

  window.fbAsyncInit = function() {
      FB.init({
          appId: '196629500887340',
          cookie: true,
          xfbml: true,
          version: 'v2.8'
      });
      FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
              statusChangeCallback(response);
              console.log(response.authResponse.accessToken);
          }
      });
  };
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
