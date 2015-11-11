window.onload = function(){
   var phrases = ["There is no such thing as natural beauty","Luxury salon where you will feel unique and special",
   "The beauty is not luxurious imagination","You are in a beauty contest every day of your life","For The Look of the Future",
   "More defined. More conditioned. More beautiful hair","Satisfying our clients","The beauty is not luxurious imagination","Take time out for beauty",
   "Beautiful. Colorful. You."];
    var random_index = Math.floor(Math.random() * phrases.length);
    console.log(random_index);
    var currentphrase = document.getElementById("phrase");
    currentphrase.innerHTML = phrases[random_index];
}