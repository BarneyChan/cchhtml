$(function(){	
	$('.aside-small .par-nav>li.on').find('a i').addClass('active')
	$('.aside-small .par-nav>li').mouseover(function(){
		if($(this).hasClass('on')){
			var this_pos=$(this).find('a i').css('background-position');
			$(this).find('a i').css('background-position',this_pos)
		}
		$(this).find('a i').addClass('active')
	}).mouseout(function(){
		$(this).find('a i').removeClass('active')
	})
	/*侧边栏切换*/
	$('.sidebar-toggle').click(function(){
		$(this).find('i.icon-toggle').toggleClass('active')
		$('.aside').toggleClass('aside-small');
		if($('.aside').hasClass('aside-small')){
			$('.mainpanel').css('width','96%');	
		}else{
			$('.mainpanel').css('width','90%');	
		}
	})


	var detail_h=$('.mainpanel').height();
	//alert(detail_h)
	$('.card-detail-wrap').css('height',detail_h);
	
	$('.mem-list li').click(function(){
		$('.card-detail-wrap').css('right','0')
	})
	$('.close-btn').click(function(){
		$('.card-detail-wrap').css('right','-350px')
	})

})