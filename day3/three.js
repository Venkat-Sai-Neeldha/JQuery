$(document).ready(function() {
    $("#one").click(function(){
    $('#myList li').first().css('color', 'red');
  
    $('#myList li').eq(1).css('background-color', 'blue');
  
    $('#myList li').last().css('font-size', '20px');
})


$('#clone-button').click(function() {
    var clonedElement = $('.element-to-clone').clone();
    
    $('.container-to-append').append(clonedElement);
});

    $("#btn").click(function(){
    $(".child").parent().css('background-color', 'aqua');
    $(".child").css("border","2px solid white")
    $(".child").children().css('background-color', 'red')
});
$("#dyn").click(function() {
    var itemText = $("#itemInput").val(); 
    if (itemText) {
        $(".list").append('<li>' + itemText + ' <button class="removeItem">remove</button></li>');
        $("#itemInput").val(''); 
    }
});

$(".list").on("click", ".removeItem", function() {
    $(this).parent().remove();
});
$("#table").click(function(){
    $('#myTable tr:even').addClass('highlight');
})
  });