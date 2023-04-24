$(function(){
    $.ajax({

        url : "./json/section7box.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                
                for(var i in data){

                    $(".section7box").eq(i).find("img").attr("src", "img_sns/"+data[i].url);

                    $(".section7box").eq(i).find("p").text(data[i].title); 
                    $(".section7box").eq(i).find("span").text(data[i].subtitle); 
                    $(".section7box").eq(i).find(".persentspan span").text(data[i].persent); 
                    $(".section7box").eq(i).find(".priceblack span").text(data[i].price); 
                    $(".section7box").eq(i).find(".sns-button").text(data[i].button);
                    $(".section7box").eq(i).find(".sns-free").text(data[i].subbutton);
                }
            }
        }
    })
});