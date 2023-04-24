$(function(){
    $.ajax({

        url : "./json/section4box.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                
                for(var i in data){

                    $(".section4box").eq(i).find("p").text(data[i].title); 
                    $(".section4box").eq(i).find("span").text(data[i].subtitle); 
                    $(".background-image-smart-persent").eq(i).find("span").text(data[i].persent); 
                    $(".background-image-smart-priceblack").eq(i).find("span").text(data[i].price); 
                    $(".background-image-smart-button").eq(i).find("button").text(data[i].button);
                }
            }
        }
    })
});