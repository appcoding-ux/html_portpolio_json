$(function(){
    $.ajax({

        url : "./json/section6box.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                
                for(var i in data){

                    $(".background-image-popup2-img").eq(i).find("img").attr("src", "img_popup2/"+data[i].url);

                    $(".section6box").eq(i).find("p").text(data[i].title); 
                    $(".section6box").eq(i).find("span").text(data[i].subtitle); 
                    $(".section6box").eq(i).find(".persentspan span").text(data[i].persent); 
                    $(".section6box").eq(i).find(".priceblack span").text(data[i].price); 
                    $(".section6box").eq(i).find(".popup2-button").text(data[i].button);
                    $(".section6box").eq(i).find(".popup2-free").text(data[i].subbutton);
                }
            }
        }
    })
});