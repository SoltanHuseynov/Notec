$(document).ready(function() {
    var myElement = $('#navbar');
    var app=$(".App")
    var position = myElement.offset().top;
    function Scroll(){
        if(window.pageYOffset>=position){
            $("#navbar").addClass("sticky")
        }
        else{
            $("#navbar").removeClass("sticky")
        }
    }
    window.onscroll=function(){Scroll()}

    
    $("#test1").click((value)=>{
        window.scrollTo(0,900)
    })
    $("#test2").click(()=>{
        window.scrollTo(0,2800)
    })
    $("#test3").click(()=>{
        window.scrollTo(0,1850)
    })
    $("#mobiletest1").click(()=>{
        window.scrollTo(0,900)
    })
    $("#mobiletest2").click(()=>{
        window.scrollTo(0,2800)
    })
    $("#mobiletest3").click(()=>{
        window.scrollTo(0,1800)
    })
    $(".iconbar").click((value)=>{
        $(".nav-links").toggle()
        $(".icons").toggle()
    })
    
});
