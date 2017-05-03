$(function(){
  window.scrollDom = {};
  window.scrollDom.button = document.getElementById("scrollBtn");
  $(window).on("scroll", function(e) {
    //控制 回到顶部 浮动按钮的显示与隐藏
    var _scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (_scrollTop > 100) {
      window.scrollDom.button.style.display = "block";
    }
    else {
      window.scrollDom.button.style.display = "none";
    }
    //TODO 头像和博客名称跟随滚动平滑移到顶部导航条
    /*   头像与主标题都要采用 position:fixed
    头像
    原始位置
    top: 60px;
    z-index: 150;
    width: 100px;
    height: 100px;
    到位后
    top: 2px;
    width: 40px;
    height: 40px;

    博客名称
    到位后
    top: 5px;
    z-index: 150;
    left: 80px;
    font-size: 26px;
    */
  });
  $("#scrollBtn").on("click",function(){
    $.smoothScroll(0); //滚动至页面顶部
  });
});
