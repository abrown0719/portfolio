$( document ).ready(function() {

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("top-nav-collapse navbar-light");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse navbar-light");
        }
    });

    // Smooth Scroll
    $('a.page-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#scrollArrowAbout').on('click', function(){
        scrollDownHeader("about");
    })

    $('#scrollArrowWork').on('click', function() {
        scrollDownHeader("work");
    })
    
    // Initialize Tooltips
    $('[data-toggle="tooltip"]').tooltip(); 
});

function scrollDownHeader(sectionName) {
    var offset = -20; //Offset of 20px
    switch(sectionName) {
        case ("about"):
            $('html, body').animate({
                scrollTop: $("#pageid").offset().top + offset
            }, 1000);
            break;
        case ("work"):
            $('html, body').animate({
                scrollTop: $("#single-project").offset().top + offset
            }, 1000);
            break;
        default:
            return false;
    }
    return false;
}
