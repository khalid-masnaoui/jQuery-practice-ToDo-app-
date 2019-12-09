//add tasks

$("form").submit(function(e) {
    e.preventDefault();


    if ($("input").val() == "") {
        alert("the field is empty");
    } else {
        const li = $("<li class='task'><p>" + $("input").val() + "</p><span ><button class='delete'>X</button></span></li>");
        $("ul").append(li);
        $("input").val("");

    }
});

//remove task 

$("ul").click(function(e) {
    if ($(e.target).hasClass("delete")) {
        console.log("im here")
        $(e.target).parent().parent().fadeOut(500, function() {
            $(this).remove()
        });
    }
})