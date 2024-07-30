$(document).ready(function(){

    $(".first_main_meno").on("click" , function(){
        $(".first_ul").hide(500)
        if ($(this).find(".first_ul").css("display")=="none"){
            $(this).find(".first_ul").show(500)
        }
    })

})