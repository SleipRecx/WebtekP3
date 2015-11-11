addEventListener("load", function(){
                 var quoteElement = document.getElementById("greeting");
                 var dayIndexes = ["Monday!","Tuesday!","Wednesday!","Thursday!","Friday!","Saturday!","Sunday!"];
                 var dayObject = new Date();
                 var index = dayObject.getDay();
                 console.log(index);
                 quoteElement.innerHTML = "Have a nice " + dayIndexes[index-1];
                 });

