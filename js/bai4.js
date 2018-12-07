$(document).ready(function() {
 var product = 0;
    $(".js-menu").click( function() {
        $(".js-menu__list").show();
        timeOut(".js-menu");
		});
    
    $(".js-menu__item").click( function(event) {
        var index = $(".js-menu__item").index($(this));
        $(".js-menu").attr("src", event.target.src);
        $(".js-menu__list").hide();
        moveItem(index);
        timeOut(".js-menu__item");
		});
    
		$(".js-arrow__left").click( function(event) {
        moveLeft();
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));
        timeOut(".js-arrow__left");
		});
    
		$(".js-arrow__right").click( function() {
        moveRight();
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));
        timeOut(".js-arrow__right");
		});
    
		/*
			Move to the left side
			@params: N/A
			@return: N/A
		*/    
		function moveLeft() {
        product--;
        if(product < 0) product = 4;
        moveItem(product);
		}

		/*
			Move to the right side
			@params: N/A
			@return: N/A
		*/    
		function moveRight() {
        product++;
        if(product > 4) product = 0;
        moveItem(product);
		}
    
		/*
			Move to the next item
			@params: N/A
			@return: N/A
		*/
    function moveItem(offset) {
        var position = 360 * offset;
        $(".js-list__products").animate({left: -position}, 500);        
    }
    
		/*
			Set time out
			@params: N/A
			@return: N/A
		*/
		function timeOut(item) {
				$(item).css({pointerEvents: "none"});
				setTimeout( function(){
						$(item).css({pointerEvents: "auto"})
				}, 500)
		}
    $(".js-list__products").on("swipeleft",function(){
        moveRight();
    }); 
    $(".js-list__products").on("swiperight",function(){
        moveLeft();
    }); 
});

