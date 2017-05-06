(function($, global){
var fileBase = "http://files.cnblogs.com/files/programInit/";
$(function() {
  /*-- 滚动相关的动作绑定 --*/
  var _scrollDom = global.scrollDom || {};
  _scrollDom.button = global.document.getElementById("scrollBtn");
  _scrollDom.isShow = false;
  var _headerHeight = 160; // header部分的高度
  var getHeaderHeight = function() {
    _headerHeight = $("#header").height();
  }
  $(global).on("resize", getHeaderHeight);
  getHeaderHeight.call(null);

  var scrollCallback = function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    var _scrollTop = global.document.documentElement.scrollTop + global.document.body.scrollTop;
    if (_scrollTop >= _headerHeight && !_scrollDom.isShow) {
      _scrollDom.button.style.display = "block";
      _scrollDom.isShow = true;
    } else if(_scrollTop < _headerHeight && _scrollDom.isShow) {
      _scrollDom.button.style.display = "none";
      _scrollDom.isShow = false;
    }
  };
  $(global).on("scroll", scrollCallback);
  scrollCallback.call(null);

  $("#scrollBtn").on("click",function(){
    $.smoothScroll(0); //滚动至页面顶部
  });
});
//添加页面LOGO
(function(filename){
  var iconLink = global.document.createElement("link");
  iconLink.setAttribute("rel", "shortcut icon");
  iconLink.setAttribute("href", fileBase + filename);
  global.document.querySelector("head").append(iconLink);
})("LOGO.ico");

})(jQuery, window);
