$(document).ready(function(){
  $(".tool-box").remove();
  $(".adblock").remove();
  $(".pulllog-box").remove();
  $("aside").click(function(){
    $(this).hide();
  });
  $('div.article_content').removeAttr('style');
  $('#btn-readmore').parent().remove();
  
  // setTimeout(function(){
  //   alert("4000");
  //   $("#btn-readmore").click();
  // }, 4000);

  // $('.recommend-right,#csdn-toolbar,.tool-box').remove();
  // $('main').css('float','unset').css('margin','auto');
  // $('div.article_content').removeAttr('style');
});