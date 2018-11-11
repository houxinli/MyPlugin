$(document).ready(function(){
	setTimeout(function(){
		$("div.mainPageListContent1:first .mainPageListTitle a")
		.each(function(index,e){
			// e.addClass("Top 10");
			var url = e.getAttribute("href");
			e.click();
		});
	}, 1000);
// TODO: https://www.cnblogs.com/champagne/p/4826611.html 
// https://www.cnblogs.com/h2zZhou/p/7250076.html
// local/sync storage

});