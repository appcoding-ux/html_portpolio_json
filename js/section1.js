$(function(){
        $.ajax({

            url : "./json/section1.json",
            dataType : "json",
            success : function(data){
                if(data.length > 0){
                    
                    for(var i in data){

                        $("#section1left > div").eq(i).find("img").attr("src", "img/img_section1/"+data[i].url);

                        $("#section1left > div").eq(i).find("span").text(data[i].title); 
                    }
                }
            }
        })
    });