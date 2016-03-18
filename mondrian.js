$(document).ready(function () {
    
	var paint = "white";

	$(".paint").on("click", function () {
		paint = $(this).css('background-color');
	})

	$('.column').on('click', function () {

		$(this).css("background-color", paint);
        
    });
    
    $("#random").on("click", function () {
        var h = height();
        var h2 = height();
        var h3 = height();
        var h4 = heights(h, h2, h3);
        var w = width();
        var w2 = width();
        var w3 = width();
        var w4 = widths(w, w2, w3);
        $('#row_1').css('height', h);
        $('#row_2').css('height', h2);
        $('#row_3').css('height', h4);
        $('#row_4').css('height', h3);
        $('.column.col1').css('width', w);
        $('.column.col2').css('width', w2);
        $('.column.col3').css('width', w4);
        $('.column.col4').css('width', w3);
    })
    
    $("#reset").on("click", function() { 
        $('.column').css('background-color', 'white');
    });
});

function height(){
    var num = Math.floor(Math.random() * 110 + 50);
    return num + "px";
}


function heights(h, h2, h3){
    var first = parseInt(h, 10);
    var second = parseInt(h2, 10);
    var third = parseInt(h3, 10); 
    var dif = 470 - first - second - third;
    return dif + "px";
}


function width(){
    var num = Math.floor(Math.random() * 150 + 50);
    return num + "px";
}

function widths(w, w2, w3){
    var first = parseInt(w, 10);
    var second = parseInt(w2, 10);
    var third = parseInt(w3, 10); 
    var dif = 670 - first - second - third;
    return  dif + "px";
}
