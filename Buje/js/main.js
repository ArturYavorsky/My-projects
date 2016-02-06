// var $btn = $('.btn');
// // var ddbtn = true;

// // alert('hello');
// console.log($btn);


// $(function(){
// 	btn()
// })

// function btn(){
// 	var $hbtn = $('.btn').outerHeight();
// 	console.log($hbtn);
// }

// $(function(){

// $('.btn').on('mouseout', function(){
// 	$('.btn').removeClass('active');
// 	$(this).addClass('active');
// })



// })



$(function(){
	owlMain();
	
})



function owlMain(){
	$('.owl-main').owlCarousel({
	    loop:true,
	    // margin:50,
	   
	    items: 1,
	    autoplay: true,
	    autoplayTimeout: 2000,
	    autoplayHoverPause: true
	})
}



















