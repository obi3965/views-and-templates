function toggleSidenav() {
    document.body.classList.toggle('sidenav-active');
  }

  var refreshIntervalid = setInterval(function(){
    var a = document.getElementById("progress-bar").style.width;
    res = 0;
    var res = a.substr(0,(a.length)-1);
    res = eval(res)+10;
    document.getElementById("progress-bar").style.width = res+"%";
    document.getElementById("progress-bar").innerHTML=res+"%";
    if(eval(res)>60){
      clearInterval(refreshIntervalid);
    }

  },300)

  let firstName = document.getElementById('firstName').value;
  let email = document.getElementById('Email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('msg').value;
  

  window.onload = function(){
    document.getElementById("form-box").onsubmit = validateContactForm;
  }
   
  function validateContactForm(){

  
    event.preventDefault();

    if(firstName == ""){
      alert('please enter your name')
      firstName.focus();
      return false;
    }
    else if(email == ""){
      alert('email')
      email.focus();
      return false;
  }
  else if(subject == ""){
    alert('subject')
    subject.focus();
    return false;
}
else if(message == ""){
  alert('message')
  message.focus();
  return false;
}
    else{
      return true;
    }
 
  }
    