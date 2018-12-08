$(document).ready(function() {
    var product = 0;
    var timer;
    $(".js-menu").click(function() {
        $(".js-menu__list").show();
        timeOut(".js-menu");
		});

    $(".js-menu__item").click(function(event) {
        var index = $(".js-menu__item").index($(this));
        $(".js-menu").attr("src", event.target.src);
        $(".js-menu__list").hide();
        resetTimer();
        moveItem(index);
        timeOut(".js-menu__item");
		});

    $(".js-arrow__left").click(function(event) {
        resetTimer();
        moveLeft();
        timeOut(".js-arrow__left");
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));
		});
    
    $(".js-arrow__right").click(function() {
        resetTimer();
        moveRight();
        timeOut(".js-arrow__right");
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));      
		});

    $(".js-list__products").on("swipeleft", function(){
        resetTimer();
        moveRight();
        timeOut(this);
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));      
    });

    $(".js-list__products").on("swiperight", function(){
        resetTimer();
        moveLeft();
        timeOut(this);
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));      
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
      @params: item
      @return: N/A
    */
    function timeOut(item) {
        $(item).css({pointerEvents: "none"});
        setTimeout(function(){
        $(item).css({pointerEvents: "auto"})
        }, 500)
    }

    /*
      Reset Timer
      @params: N/A
      @return: N/A
    */       
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(autoSlide, 3000);      
    }

    /*
      Automate slide item
      @params: N/A
      @return: N/A
    */    
    function autoSlide() {
        moveRight();
        $(".js-menu").attr("src", $(".js-menu__item").eq(product).attr("src"));
    }

    /*
      Initialize 
      @params: N/A
      @return: N/A
    */
    function init() {
        resetTimer();
    }
    
    init();
});

