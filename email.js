function SendMail(event) {
  var params = {
    from_name: document.getElementById("from_name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  emailjs
    .send("port-contact", "template_320h7wt", params)
    .then(function (res) {});

  event.preventDefault();
  document.getElementById("contact-form").reset();
}
