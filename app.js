$(function(){

    var scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {   // === Scroll function ====
        if (scrollOffset >= 0 && scrollOffset <= 718) {
            $("#n1").addClass('active')
        } else {
            $("#n1").removeClass('active')
        }
        if (scrollOffset >= 718 && scrollOffset <= 5032) {
            $("#n2").addClass('active')
        } else {
            $("#n2").removeClass('active')
        }
        if (scrollOffset >= 5032 && scrollOffset <= 50000) {
            $("#n3").addClass('active')
        } else {
            $("#n3").removeClass('active')
        }
    }



    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this)
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".nav a").removeClass('active');
        $(".nav").removeClass('active');
        $this.addClass('active');
            
        $("html, body").animate({
            scrollTop: blockOffset  -130
        }, 800);
        
    })


    $(window).on("scroll", function(){
        if (scrollOffset >= 0 && scrollOffset <= 718) {
            $("#n1").addClass('active')
        } else {
            $("#n1").removeClass('active')
        }
        if (scrollOffset >= 718 && scrollOffset <= 5032) {
            $("#n2").addClass('active')
        } else {
            $("#n2").removeClass('active')
        }
        if (scrollOffset >= 5032 && scrollOffset <= 50000) {
            $("#n3").addClass('active')
        } else {
            $("#n3").removeClass('active')
        }
    });


    $(".header__logo").on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });
























});