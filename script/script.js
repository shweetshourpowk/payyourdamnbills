$(document).ready(function(){
    $.getJSON("data/data.json").done(function(data){

        localStorage.setItem("data", JSON.stringify(data));

        $.each(data.bills, function(index, value){

            $("#firstView #list ul").append(
                "<li><span class='bName'>" + value.billname + "</span><span class='dDate'>due " + value.duedate + "</span><span class='bAmount'>$" + value.amount +
                    "</span></li>"
            );

        });

    }).fail(function(){

        if(localStorage.length != 0){

            var localData = $.parseJSON(localStorage.getItem("data"));

            $.each(localData.bills, function(index, value){

                $("#firstView #list ul").append(
                    "<li><span class='bName'>" + value.billname + "</span><span class='dDate'>" + value.duedate + "</span><span class='bAmount'>$" + value.amount +
                        "</span></li>"
                );

            });

        }

    });
    init();
    console.log(localStorage);
});

function init(){
    setBindings();
}

function setBindings(){
    var currentView = "firstView",
        lastView = "";

    $('nav div').click(function (e) {
        var viewID = e.currentTarget.id + "View";
        if(viewID != currentView){
            lastView = currentView;
            currentView = viewID;
            if(viewID == "firstView"){
                $("#" + currentView).transition({x:"0", zIndex:2}, 400);
                $("#" + lastView).transition({zIndex:1});
                $("#" + lastView).transition({x:"100%", delay: 400}, 400);
            }else{
                $("#" + currentView).transition({x:"-100%", zIndex:2}, 400);
                $("#" + lastView).transition({zIndex:1});
                $("#" + lastView).transition({x:"100%", delay: 400}, 400);
            }

        }
    });




}

