// line thru the specific li and toggling it

$("ul").on("click","li", function () {// when a li is clicked inside of a ul only click tht
  $(this).toggleClass("completed");
});

// click on X to delete toDo
$("ul").on("click","span", function () {
  // $(this).remove(); wont use thiscoz this will just remove the "x"
  $(this)
    .parent()
    .fadeOut(1000, function () {
      $(this).remove();
    }); //it removes the parent element i.e. LI in this case
  event.stopPropagation(); // this is for trrigering only the span not every parent elemnt of his
});


// add the new to do
$("input[type='text']").keypress(function(event){
    if(event.which=== 13){
    // grabbing the text out of input in a variable
        var todoText=$(this).val();
        $(this).val("");
        // create a new li and add to ul using append
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li>");
    }
})


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})