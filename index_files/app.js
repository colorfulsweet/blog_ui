(function(){

window.onscroll = function(e) {
  if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
    document.getElementById("scrollBtn").style.display = "block";
  }
  else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}
})();
