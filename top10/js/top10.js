$(document).ready(function(){
	setTimeout(function(){
		$("div.mainPageListContent1:first .mainPageListTitle a")
		.each(function(index,e){
			// e.addClass("Top 10");
			// localStorage.curT = Date.now();
			var id = e.getAttribute("href").split('/')[2];
			var title = e.innerHTML;
			console.log("id", id)
			console.log("title: ", title);
			if(typeof(localStorage['top10ViewHistory']) == 'undefined'){
				var obj = new Object();
				// obj.account TODO
				obj.num = 1;
				obj.posts = new Array(1);
				var post = {'id': id, 'title': title};
				obj.posts[0] = post;
				console.log("obj: ", obj)
				localStorage['top10ViewHistory'] = obj;
			}else{
				var obj = localStorage['top10ViewHistory'];
				console.log("obj: ", obj)
				var posts = obj.posts;
				var flag = 0;
				for (var i = posts.length - 1; i >= 0; i--) {
					if(posts[i].id == id){
						flag = 1;
						break;
					}
				}
				if(flag == 0){
					obj.num++;
					var post = {'id': id, 'title': title};
					obj.posts.push(post);
					localStorage['top10ViewHistory'] = obj;
				}
			}
			console.log('localStorage', localStorage);
		});
	}, 1000);
// TODO: account storage
// 从storage中取回帖数等指标判断是否再次打开
});