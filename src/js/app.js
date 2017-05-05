$(function() {
  var _scrollDom = window.scrollDom || {};
  _scrollDom.button = document.getElementById("scrollBtn");
  _scrollDom.sideBar = document.getElementById("sideBarMain");
  _scrollDom.toggleSide = document.getElementById("toggle-side");
  _scrollDom.isShow = false;
  var scrollCallback = function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    var _scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (_scrollTop >= 160 && !_scrollDom.isShow) {
      _scrollDom.button.style.display = "block";
      _scrollDom.sideBar.className = "side-fix";
      _scrollDom.toggleSide.style.display = "block";
    } else if(_scrollDom.isShow) {
      _scrollDom.button.style.display = "none";
      _scrollDom.sideBar.className = "";
      _scrollDom.toggleSide.style.display = "none";
    }
  };
  $(window).on("scroll", scrollCallback);
  scrollCallback.call(null);

  $("#scrollBtn").on("click",function(){
    $.smoothScroll(0); //滚动至页面顶部
  });
  $("#toggle-side").on("click", function(){
    var sideContianer = $("#sideBar");
    if(sideContianer.is(":hidden")) {
      sideContianer.show(300);
    } else {
      sideContianer.hide(300);
    }
  })
});
