var i = 0;

function addH1(){
    var L_input = $('#addStr').val();
    var nome = "more"+i;
    $('.right-side').append("<h1 id="+"'"+nome+"'>"+L_input+"</h1>");
    i++;
    var r =  Math.random()*255;
    var g =  Math.random()*255;
    var b =  Math.random()*255;
    $('#'+nome).css({
        "background-color":"rgb("+r+","+g+","+b+")",
        "font-family":"Arial, Helvetica, sans-serif",
        "text-align":"center"
    });
    if (i>10){
        $('.right-side').css("overflow-y", "scroll")
    }
}

function remove(){
    if (i>0){
        var nome = "more"+(i-1);
        $('h1#'+nome).remove();
        i--;
    }
    if (i<=10){
        $('.right-side').css("overflow-y", "hidden")
    }
}

function enter(){
    var keyC = event.keyCode;
    if (keyC == 13){
        addH1();
    }
}