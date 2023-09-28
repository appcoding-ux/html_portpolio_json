$(function(){
        $.ajax({

            url : "./json/section5box.json",
            dataType : "json",
            success : function(data){
                if(data.length > 0){
                    
                    for(var i in data){

                        $(".background-image-popup-img").eq(i).find("img").attr("src", "img_popup1/"+data[i].url);

                        $(".section5box").eq(i).find("p").text(data[i].title); 
                        $(".section5box").eq(i).find("span").text(data[i].subtitle); 
                        $(".section5box").eq(i).find(".persentspan span").text(data[i].persent); 
                        $(".section5box").eq(i).find(".priceblack span").text(data[i].price); 
                        $(".section5box").eq(i).find(".popup-button").text(data[i].button);
                        $(".section5box").eq(i).find(".popup-free").text(data[i].subbutton);
                    }
                }
            }
        })
    });