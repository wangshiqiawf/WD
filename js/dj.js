$(function(){
	$("#wpic li").each(function(){
		/*$(this).hover(function(){
 			$(this).find("img").animate({height:630,zIndex:10,marginTop:-283},500);
 		},function(){
 			$(this).find("img").animate({height:176},500);
 			})*/

			/*$(this).on("tap",function(){
				if($(this).find("img").animate({height:176})){
					$(this).find("img").animate({height:630,zIndex:10,marginTop:-283},500);
				}else if($(this).find("img").animate({height:630})){
					$(this).find("img").animate({height:176,marginTop:283,zIndex:10},500);
				}
                
			})   */
			$(this).on('tap',function(){
				$(this).stop().animate({height:400},300)
				$(this).siblings().stop().animate({height:"100px"});
					
			})
		})		
})
