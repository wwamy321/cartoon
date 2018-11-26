
		var initNav = (function(){
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
			});
			initNav();


	//轮播
		~function(){
			var slide = document.getElementsByClassName('slideBox')[0];
		var slideBox = document.getElementById('slideBox');
		var menu = document.getElementsByClassName('list')[0];
		var menu_ul = menu.getElementsByTagName('ul')[0];
		var menu_ul_li = menu_ul.getElementsByTagName('li');
		var oSlide = document.getElementsByClassName('slideBox')[0];
		var oBtn_left = oSlide.getElementsByClassName('left')[0];
		var oBtn_right = oSlide.getElementsByClassName('right')[0];
		var i=0;
		var timer=0;
		var len = menu_ul_li.length;
		function play(){
			list();
			slideBox.style.left='-'+i+'00%';
			i++;
			if(i>4){i=0}
		}
		function go(){ //定时器
			timer = setInterval(play, 1000)
		}
		go();
		slide.onmouseover = function(){clearInterval(timer)}
		slide.onmouseout = function(){go()}

		//li自动动
		function list(){
			for(var a = 0; a<len; a++){
				menu_ul_li[a].className="";
			}
				menu_ul_li[i].className="on";
		}
		
		//li滑动
		function show(){
			for(let j=0; j<len; j++){
				menu_ul_li[j].onmouseover = function(){
					i = j;
					play();
				}
			}
		}
		show();

		oBtn_left.onclick = oBtn_right.onclick = function(){
			if(this == oBtn_left){
				i --;
				console.log(i);
				if(i == -1){ i = len-1 }
			}else{
				i ++;
				console.log(i);
				if( i == len){ i = 0}
			}
			list();
			slideBox.style.left='-'+ i +'00%';
		}
		}()
