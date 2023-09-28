$(function(){
        $.ajax({

            url : "./json/section2.json",
            dataType : "json",
            success : function(data){
                if(data.length > 0){
                    
                    for(var i in data){

                        $(".iconbox1").eq(i).find("p").text(data[i].title); 
                        $(".iconbox1").eq(i).find("span").text(data[i].subtitle);
                        $(".background-image-today").eq(i).find("span").text(data[i].today); 
                        $(".persentspan").eq(i).find("span").text(data[i].persent);
                        $(".priceblack").eq(i).find("span").text(data[i].price);
                        $(".iconbox1").eq(i).find("button").text(data[i].button);
                        $(".iconbox1").eq(i).find(".free").text(data[i].subbutton);
                    }
                }
            }
        })
    });