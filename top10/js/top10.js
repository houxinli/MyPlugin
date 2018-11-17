$(document).ready(function(){
	// localStorage.removeItem("top10ViewHistory");
	console.log('localStorage', localStorage);
	setTimeout(function(){
		$("div.mainPageListContent1:first .mainPageListTitle a")
		.each(function(index,e){
			// var url ="www.cc98.org" + e.getAttribute("href");
			var url =e.getAttribute("href");
			var id = e.getAttribute("href").split('/')[2];
			var title = e.innerHTML;
			console.log("id", id)
			console.log("title: ", title);
			if(typeof(localStorage['top10ViewHistory']) == "undefined"){
				var obj = new Object();
				obj.num = 1;
				obj[id] = title;
				var str = JSON.stringify(obj);
				localStorage['top10ViewHistory'] = str;
			}else{
				var str = localStorage['top10ViewHistory'];
				obj = JSON.parse(str);
				if(obj[id] === undefined){
					obj[id] = title;
					obj.num++;
					e.click();
					str = JSON.stringify(obj);
					localStorage['top10ViewHistory'] = str;
					$.get(url, function(data){
						console.log("data", data);
					});
				}
				else{
					$.get(url, function(data){
						console.log("read:", data);
					});	
				}
			}
		});
	}, 1000);
// TODO: account storage
// curT = Date.now();
// 从storage中取回帖数等指标判断是否再次打开
// 爬取热门回帖数
});