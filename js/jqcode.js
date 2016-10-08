$(function () {
	// $('.menu li').hover(function() {
	// 	$(this).addClass('on').find('ul:first').slideDown();
	// }, function() {
	// 	$(this).removeClass('on').find('ul:first').slideUp();
	// });
jQuery("#banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true});
 //jQuery(".nfocus").slide({titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPage:true,autoPlay:true});
 //jQuery(".groll").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4});
	// // jQuery(".broll").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
jQuery(".mtab").slide({ titCell:".mtabt li",trigger:"click", mainCell:".mtabcon"});
 //jQuery("#ntab").slide({ titCell:".ntabt li", mainCell:".ntabcon"});
	// $('.plist li').not($('.p3')[0]).hover(function() {
	// 	$(this).find('h5').fadeOut().end().find('.info').animate({bottom:0}, 300);
	// }, function() {
	// 	$(this).find('h5').fadeIn().end().find('.info').animate({bottom:'-205px'}, 300);
	// });
	$('.mlist li').hover(function() {
		$(this).find('h5').fadeOut().end().find('.info').slideDown();
	}, function() {
		$(this).find('h5').fadeIn().end().find('.info').slideUp();
	});
	// $('.poplink').click(function() {
	// 	$('.maskbg,.popbox').fadeIn();
	// 	return false;
	// });
	// $('.closed,.maskbg').click(function() {
	// 	$('.maskbg,.popbox').fadeOut();
	// });
})



















