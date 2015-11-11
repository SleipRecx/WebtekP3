addEventListener("load", function(){
                 var quoteElement = document.getElementById("greeting");
                 var dayIndexes = ["Monday!","Tuesday!","Wednesday!","Thursday!","Friday!","Saturday!","Sunday!"];
                 var timeIndexes = ["Good morning,", "Good afternoon,", "Good evening", "Good night,"]
                 var dayObject = new Date();
                 var index = dayObject.getDay();
                 var hour = dayObject.getHours();
                 if (hour < 4 || hour >= 22){
                    quoteElement.innerHTML = "Good night, have a nice " + dayIndexes[index-1];
                 }else if (hour>4 && hour <11){
                    quoteElement.innerHTML = "Good morning, have a nice " + dayIndexes[index-1];
                 }else if(hour>11 && hour <16){
                    quoteElement.innerHTML = "Good afternoon, have a nice " + dayIndexes[index-1];
                 }else{
                    quoteElement.innerHTML = "Good evening, have a nice " + dayIndexes[index-1];
                 }
                 
                 });

