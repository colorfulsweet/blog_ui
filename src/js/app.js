$(function() {
  window.scrollDom = window.scrollDom || {};
  window.scrollDom.button = document.getElementById("scrollBtn");
  window.scrollDom.sideBar = document.getElementById("sideBarMain");
  var scrollCallback = function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    var _scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    if(!window.scrollDom.toggleSide) {
      //由于嵌入的内容是异步加载, 可能初始化的时候无法取到这个对象
      window.scrollDom.toggleSide = document.getElementById("toggle-side");
    }
    if (_scrollTop >= 160) {
      window.scrollDom.button.style.display = "block";
      window.scrollDom.sideBar.className = "side-fix";
      window.scrollDom.toggleSide.style.display = "block";
    } else {
      window.scrollDom.button.style.display = "none";
      window.scrollDom.sideBar.className = "";
      window.scrollDom.toggleSide.style.display = "none";
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
