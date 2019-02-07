$(document).ready(function(){
    //SideNav que hace que se ajuste a versiones mobiles
    $('.button-collapse').sideNav();
    //Slider
    $('.slider').slider({
        indicators:false,
        height:500,
        transition:500,
        interval:6000,
    })
    $('.materialboxed').Materialbox();
    //ScrollSpy
    $('.scrollspy').scrollSpy();
})
