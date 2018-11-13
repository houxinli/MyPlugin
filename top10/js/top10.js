$(document).ready(function(){
	setTimeout(function(){
		$("div.mainPageListContent1:first .mainPageListTitle a")
		.each(function(index,e){
			// e.addClass("Top 10");
			// localStorage.curT = Date.now();
			var url = e.getAttribute("href").split('/')[2];
			console.log(localStorage[url])
			if(typeof(localStorage[url]) == 'undefined'){
				e.click();
				var title = e.innerHTML;
				localStorage[url] = title;
				console.log("title: ", title);
				console.log("saved title: ", localStorage[url])
			}
			// console.log("url: ", url);
			// var post = {url: title};

		});
	}, 1000);
// TODO: https://www.cnblogs.com/champagne/p/4826611.html 
// https://www.cnblogs.com/h2zZhou/p/7250076.html
// local/sync storage

});