	//隐藏导航
	var initNav = function(){
		var header = document.getElementById('headerHidden');
			document.onscroll=function(){
				var top=document.body.scrollTop || document.documentElement.scrollTop;
				if(top > 100){
					header.style.opacity = '1';
					header.style.top = '0px';
					header.style.transition = '0.45s';
				}else if(top < 100){
					header.style.opacity = '0';
					header.style.top = '-54px';
					}
			}
	};
	initNav();