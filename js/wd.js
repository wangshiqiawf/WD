
;(function($){
	//1、市集图片划拨
	var len=$(".pic li").length;
		index=0;		
		//alert(len);
		//左滑
			$(document).on("swipeLeft",function(){
				if(index==len-1){
					//index=0;
					index=len-1;
				}else{
					index++;
					//alert(index);
				}
				auto();
				clearInterval(timer);	
			})
			//右滑
			$(document).on("swipeRight",function(){clearInterval(timer);
				if(index==0){
					//index=len-1;
					index=0;
				}else{
					index--;
				}
				auto();
				
				
			})

			//定义移动距离函数
			function auto(){
				var	WD=document.documentElement.clientWidth,//$(window).width();
					pas=-WD*index;
				$(".pic").css({
						"-webkit-transform":"translateX("+pas+"px)"
				})
				
				//切换图片数字对应
				$(".num li").eq(index).addClass("bg").siblings().removeClass("bg");		
			}
			//图片自动轮播
				var array = Array(
		 		"img/1.png",
		 		"img/2.png",
		 		"img/3.png",
		 		"img/4.png",
		 		"img/5.png",
		 		"img/6.png",
		 		"img/7.png"
	 		);
	 		var i=1;
	 		var timer=null;
	 		function change(){
	 			if(i>7){
	 				i=1;
	 			}else{
	 				$(".num li").removeClass("bg");
	 				$(".num li:nth-child("+i+")").addClass("bg");
	 				$(".pic li img").attr("src",array[i-1]);
	 				i++
	 			}	
	 		}
	 		/*定时器，图片轮播
	 		timer=setInterval(change,1000)
	 		划过时清除定时器，离开时恢复定时器
	 		$(".pic").on("mouseover",function(){
	 			clearInterval(timer);
	 		})
	 		$(".pic".on("mouseout",function(){
	 			timer=setInterval(timer);
	 		}))*/

			//底部点击效果
			$("#fuls li").on('tap',function(){
				if($(this).css({"background-position": "0 -30px"})){
					$(this).css({"background-position": "0 0"});
				}
			})
})(Zepto)