$("input[type='text']").keypress(function(event){
    if(event.which==13){
        $("ul").append("<li><span>X  </span> " + $("input[type='text']").val() + " </li>");
        $(this).val("");
    };
});
$("ul").on('click', "li", function(){
    $(this).toggleClass("gray");
});


$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("h5").click(function(){
    $("input[type='text']").toggleClass("hide");
    var text=$(this).text();
    if(text =="HIDE EDIT"){
    $(this).text("SHOW EDIT");
    
}
else{$(this).text("HIDE EDIT");};

})