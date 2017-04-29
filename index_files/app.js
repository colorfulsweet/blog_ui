(function(){
$(function(){
  $(window).on("scroll", function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
      document.getElementById("scrollBtn").style.display = "block";
    }
    else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  });
  $("#scrollBtn").on("click",function(){
    $.smoothScroll(0);
  });
});
})();
