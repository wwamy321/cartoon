window.onload=function(){
	//隐藏导航
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
	//通告条
	~function marquee(){
        	var mq = document.getElementsByTagName('marquee')[0];
			mq.onmouseover = function(){
				mq.stop();
			}
			mq.onmouseout = function(){
				mq.start();
			}
        }();
	//轮播
	(function(){
		var slideBox = document.getElementById('slideBox');
		var menu = document.getElementsByClassName('list')[0];
		var menu_ul = menu.getElementsByTagName('ul')[0];
		var menu_ul_li = menu_ul.getElementsByTagName('li');
		var oSlide = document.getElementsByClassName('slideBox')[0];
		var oBtn_left = oSlide.getElementsByClassName('left')[0];
		var oBtn_right = oSlide.getElementsByClassName('right')[0];
		var a = 1;
		var timer = null;
			function slide(){
				show();
				slideBox.style.left = - a + '00%';
			}	
			function pd(){
				slide();
				a ++;
				if( a == 5){
					a = 0;
				}
			}
			function go(){
				timer = setInterval(pd, 1500);
			}
			go();
			slideBox.onmouseover = function(){clearInterval(timer)}
			slideBox.onmouseout = function(){go();}
			//滑动Li变图
        	function list(){
        		for (var i = 0; i < menu_ul_li.length; i++) { //Li按钮组
            		menu_ul_li[i].index = i;
            		menu_ul_li[i].onmouseover = function () {
            		clearInterval(timer);
                	a = this.index; //建立Li按钮组与图片之间对应的关系
                	pd();
            		}
        		}
       		}
 			list();
 			//样式统一 li划过按钮与图片列表统一
 			function show() {
            	for (var i = 0; i < menu_ul_li.length; i++) {
                	menu_ul_li[i].className = ""; //Li
            	}
           			menu_ul_li[a].className = "on";
        	}       
        	//左右按钮
        	oBtn_left.onclick = oBtn_right.onclick = function(){
				if( this == oBtn_left ){
					a --;
               	 	if(a == -1) a = menu_ul_li.length  - 1;
				}else{
					a ++;
					if( a == 5 ){ a = 0}
				}
				slide();
			}
			oBtn_left.onmouseover = oBtn_right.onmouseover = function(){clearInterval(timer)}
	}());
	//侧边栏
	(function(){
		//tab栏
		var Tab_item = document.getElementsByClassName('tab_item');
		var item_line = document.getElementsByClassName('line');
		var txt = document.getElementsByClassName('txt');
		var side = document.getElementsByClassName('side_list_item');
		//排行列表
		var con_item = document.getElementsByClassName('content_item');
		var brief = document.getElementsByClassName('brief');
		var detail = document.getElementsByClassName('detail');
			(function(){
				for( let i = 0; i<Tab_item.length; i++){
						Tab_item[i].onclick = function(){
						for(var j = 0; j<Tab_item.length; j++){
							item_line[j].style.display = 'none';
							txt[j].style.color = '#333';
							side[j].style.display = 'none';
							if( j == 2 || j == 3){
							brief[j].className = 'brief on';
							detail[j].className =  'detail off';
						}
						}
						item_line[i].style.display = 'block';
						txt[i].style.color = '#FF5267';
						side[i].style.display = 'block';
						if( i == 2 || i == 3){
							brief[i].className = 'brief off';
							detail[i].className =  'detail on';
						}
					}	
				}
			}())
			for( let i = 0; i<con_item.length; i++){
				con_item[i].onmouseover = function(){
					for(let j = 0; j<con_item.length; j++){
						brief[j].className = 'brief on';
						detail[j].className = 'detail off'
					}
					brief[i].className = 'brief off';
					detail[i].className =  'detail on';
				}
			}
	}());
	//漫画侧边栏
	(function(){
		var  comic = document.getElementsByClassName('comic_item');
		var  brief = document.getElementsByClassName('brief1');
		var detail = document.getElementsByClassName('detail1');
		for(let i =0; i<comic.length; i++){
			comic[i].onmouseover = function(){
				for(let j=0; j<comic.length; j++){
					brief[j].className = 'brief1 on';
					detail[j].className = 'detail1 off'
				}
				brief[i].className = 'brief1 off';
				detail[i].className = 'detail1 on'
			}
		}
	}())

	// 点击TOP 回到顶部
	~function scroll(){
			var side_top = document.getElementsByClassName('shang')[0]; 
			var timer;
			side_top.onclick = function(){
				// 利用定时器运动
				timer = setInterval(function(){
					// 获取浏览器滚动条高度
					var Top = document.body.scrollTop || document.documentElement.scrollTop;
					// 随便求个差值
					var ispeed = Math.floor(-Top/6);
					// 让浏览器的滚动条每次定时器执行都向上移
					document.documentElement.scrollTop=document.body.scrollTop = Top + ispeed;
					// 向上移动的时候禁止鼠标滚轮运动
						window.onmousewheel=document.onmousewheel=function(){return false;}
					// 滚动到顶部的时候停止定时器和启动滚动条
					if(Top == 0){
						clearInterval(timer)
						window.onmousewheel=document.onmousewheel=function(){return true;}
					}
				},20)
			}
		}()


	//固定栏颜色变换
	~function fixed(){
			var btm = document.getElementById('btm');
			var ul = document.getElementsByTagName('ul')[0];
			var li = btm.getElementsByTagName('ul')[0].children;
			//window.onscroll 滚动条滚动事件		
			window.onscroll = function(){
				//获取滚动条距离顶部的距离
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;	
				for(let i=0; i<li.length; i++){
					li[i].className = "li"
				}	
				if(scrollTop < 700){
					li[0].className = "li true"
				}else if(scrollTop >= 700 && scrollTop < 1100){
					li[1].className = "li true"
				}else if(scrollTop >= 1100 && scrollTop < 1700){
					li[2].className = "li true"
				}else if(scrollTop >= 1700){
					li[3].className = "li true"
				}

			}
		}()

 }

		
		
