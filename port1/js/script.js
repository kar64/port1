
$(function() {

	new WOW().init();

   $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    
        if($(this).hasClass('is-active')){
            console.log("down");
            $('.header_wraper_menu').slideDown(300);
        }else{
            console.log("up");
            $('.header_wraper_menu').slideUp(300);
        }
    });
    
    
    console.log("zdorova zaebal");
    $('.review_container_row_item').click(function(){
        const revID=$(this).data('revid');
        console.log(revID);
        $('.review_container_row_item').not(this).removeClass('active');
        $(this).addClass('active');
        $('.review_container_var').not(revID).removeClass('active');
        $(revID).addClass('active');
    });
    
	$('a.yakor').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 2000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

});