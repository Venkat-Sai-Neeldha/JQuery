$(document).ready(function(){
    $("#hide").click(function(){
        $("#box").hide()
    })
    $("#show").click(function(){
        $("#box").show()
    })
    $("#change_style").click(function(){
        $(".con").css("background-color", "blue")
    })
    $("#add").click(function(){
        $("#addclass").addClass("add")
    })
    $("#removeclass").click(function(){
        $("p").removeClass("remove")
    })
    $("#tog").click(function(){
        $("img").toggle()
    })
    $("#text").click(function(){
        $("#chn").text("this is changed text")
    })
})