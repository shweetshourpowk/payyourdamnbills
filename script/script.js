$(document).ready(function(){
    init();
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

