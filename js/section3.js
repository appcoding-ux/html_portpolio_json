$(function(){
        $.ajax({

            url : "./json/section3.json",
            dataType : "json",
            success : function(data){
                if(data.length > 0){
                    
                    for(var i in data){

                        $("#iconbox2 > div").eq(i).find("img").attr("src", "img/img_section3/"+data[i].url);

                        $("#iconbox2 > div").eq(i).find("span").text(data[i].title);

                        if(i == 6){
                            $("#iconbox2 > #iconboxsopum").eq(6).find("img").attr("src", "img/img_section3/"+data[6].url);

                            $("#iconbox2 > #iconboxsopum").eq(6).find("span").text(data[6].title);
                        }
                    }
                }
            }
        })
    });