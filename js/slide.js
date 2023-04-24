function prev(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-1920);
    $('.slide').stop().animate({marginLeft:0},800);
}

function next(){
    $('.slide').stop().animate({marginLeft:-1920},800, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
}

function slide(){
    $('.slide').stop().animate({marginLeft:-1920},800, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:0});
    });
}

setInterval(slide,3000);

$(function(){
    $('.prev').click(function(){
        prev();
    });

    $('.next').click(function(){
        next();
    });
});

$(function(){
    $.ajax({

        url : "./json/slide.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                
                for(var i in data){
                    $(".slide > li").eq(i).find("img").attr("src", "img/img_slide/"+data[i].url);
                }
            }
        }
    })
});
    