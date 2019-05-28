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