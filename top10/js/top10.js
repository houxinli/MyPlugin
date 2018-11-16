$(document).ready(function(){
	// localStorage.removeItem("top10ViewHistory");
	console.log('localStorage', localStorage);
	setTimeout(function(){
		$("div.mainPageListContent1:first .mainPageListTitle a")
		.each(function(index,e){
			// e.addClass("Top 10");
			// localStorage.curT = Date.now();
			var id = e.getAttribute("href").split('/')[2];
			var title = e.innerHTML;
			console.log("id", id)
			console.log("title: ", title);
			if(typeof(localStorage['top10ViewHistory']) == "undefined"){
				var obj = new Object();
				// console.log("branch1");
				// obj.account TODO
				obj.num = 1;
				obj[id] = title;
				// console.log("obj: ", obj);
				var str = JSON.stringify(obj);
				localStorage['top10ViewHistory'] = str;
				// console.log('localStorage', localStorage);
			}else{
				// console.log("branch2");
				var str = localStorage['top10ViewHistory'];
				obj = JSON.parse(str);
				// console.log("obj: ", obj)
				if(obj[id] === undefined){
					obj[id] = title;
					obj.num++;
					e.click();
					str = JSON.stringify(obj);
					localStorage['top10ViewHistory'] = str;
				}
			}
		});
	}, 1000);
// TODO: account storage
// 从storage中取回帖数等指标判断是否再次打开
});