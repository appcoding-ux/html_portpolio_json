$(function(){
        $.ajax({

            url : "./json/footer3.json",
            dataType : "json",
            success : function(data){
                if(data.length > 0){
                    
                    for(var i in data){

                        $("#footer3").eq(i).find("span").text(data[i].title);

                    }
                }
            }
        })
    });