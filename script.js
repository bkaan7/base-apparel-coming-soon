function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function showError(email) {
    if (!validateEmail(email)) {
      document.getElementById("error-message").innerHTML = "Please provide a valid email";
      $(".errorImg").css("display","block");
    } else {
      document.getElementById("error-message").innerHTML = "";
      $(".errorImg").css("display","none");
    }
  }