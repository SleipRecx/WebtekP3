// Gets called when document is loaded
window.onload = function(){
    var currentphrase = document.getElementById("phrase");
    // Array with cheesy phraeses
    var phrases = ["There is no such thing as natural beauty","Luxury salon where you will feel unique and special",
        "The beauty is not luxurious imagination","You are in a beauty contest every day of your life","For The Look of the Future",
        "More defined. More conditioned. More beautiful hair","Satisfying our clients","The beauty is not luxurious imagination","Take time out for beauty",
        "Beautiful. Colorful. You.","Revitalizing beauty for your hair","The Desired Place For Beauty","Delightful Treats For Your Hair",
        "Beauty Meets Classy Styles"];

    // Random index
    var random_index = Math.floor(Math.random() * phrases.length);

    // Sets currentphrase to a random quote
    currentphrase.innerHTML = phrases[random_index];
}