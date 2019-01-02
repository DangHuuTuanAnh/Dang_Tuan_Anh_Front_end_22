$(function(){
	$(".plus").click(function(){
		$(this).parent().next().toggle(1000);
		$(this).siblings().css("color","#A5DF00");
		$(this).css("display","none");
		$(this).siblings().css("display","block");
		// $("")

	});
	$(".minus").click(function(){
		$(this).parent().next().toggle(1000);
		$(this).siblings().css("color","white");
		$(this).css("display","none");
		$(this).siblings().css("display","block");
	});
});