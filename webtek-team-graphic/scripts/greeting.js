addEventListener("load", function(){
                 var quoteElement = document.getElementById("greeting");
                 var dayIndexes = ["monday!","tuesday!","wednesday!","thursday!","friday!","saturday!","sunday!"];
                 var dayObject = new Date();
                 var index = dayObject.getDay();
                 console.log(index);
                 quoteElement.innerHTML = "Have a nice " + dayIndexes[index-1];
                 });

