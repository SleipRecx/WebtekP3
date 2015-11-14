// Runs when document is loaded
// Gives the user a custom greeting based on day and time
addEventListener("load", function () {
    var quoteElement = document.getElementById("greeting");
    // Array with all weekdays
    var dayIndexes = ["Monday!", "Tuesday!", "Wednesday!", "Thursday!", "Friday!", "Saturday!", "Sunday!"];
    // Array with all greetings
    var timeIndexes = ["Good morning,", "Good afternoon,", "Good evening", "Good night,"]
    var dayObject = new Date();
    var index = dayObject.getDay();
    var hour = dayObject.getHours();
    // Set's greeting based on date and time
    if (hour < 4 || hour >= 22) {
        quoteElement.innerHTML = timeIndexes[3] +" have a nice " + dayIndexes[index - 1];
    } else if (hour > 4 && hour < 11) {
        quoteElement.innerHTML = timeIndexes[0] +" have a nice " + dayIndexes[index - 1];
    } else if (hour > 11 && hour < 16) {
        quoteElement.innerHTML = timeIndexes[1] +" have a nice " + dayIndexes[index - 1];
    } else {
        quoteElement.innerHTML = timeIndexes[2] +" have a nice " + dayIndexes[index - 1];
    }

});

