/**
 * Created by espen on 03.11.15.
 */
function submitButton() {
    var name = document.getElementsByName("name")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var saloon = document.getElementsByName("saloon")[0].value;
    var date = document.getElementsByName("date")[0].value;
    var time = document.getElementsByName("time")[0].value;
    var treatment = document.getElementsByName("treatment")[0].value;

    // Alerts the user that they have to fill out the entire form
    if (name.length < 1 || phone.length < 1 || email.length < 1 || date.length < 1 || time.length < 1) {
        alert("Please fill the form!");
        return;
    }
}