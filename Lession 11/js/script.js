// $(document).ready(function(){

// });

//viết ngắn gọn
$(function(){
	
	$("input").click(function(){
		// // $(".red").css("color","red");
		// // $(" body #text").css("border","1px solid red");
		// // $(".red").css("font-size","20px");
		// $(".red").width("50%");
		// $(".red").height("150px"); 
		// $(".red").html("test"); //Thay đổi nội dung innerHTML
		// @("input").attr("value","test");//thay đổi thuộc tính
		// $("input").attr("class","red");
		// $("input").addClass("blue");
		// $("input").removeClass("red");
		$("#menu").children().eq(1).next().css("color","red");
		//eq(n)
		// next()
		// prev()
		// first()
		// last()  
		// children()
		// parent()
	});
	$(window).resize(function(){
		alert("test <br/>");
	});
});