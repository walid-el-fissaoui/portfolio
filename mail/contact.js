const contactForm = document.getElementById("contact-form");
const contactFormStatus = document.querySelector("#contact-form #status");
contactForm.addEventListener("submit",(e) => {
  e.preventDefault();
  contactFormStatus.classList.remove("d-none");
  contactFormStatus.classList.add("d-block");
  contactFormStatus.innerHTML = "<p class='loading'><div class='lds-dual-ring'></div></p>";
  const name =  document.getElementById("name").value;
  const email =  document.getElementById("email").value;
  const message =  document.getElementById("message").value;

  fetch("/mail/contact.php", {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    mode: 'same-origin',
    credentials: 'same-origin',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    })
  }).then(json => json.json()).then(res => {
    if(res['top_error']) {
      contactFormStatus.innerHTML = "<p class='error'><i class='fas fa-times'></i>" + res['top_error'] + "</p>"
    }
    else if (res['top_success']) {
      contactFormStatus.innerHTML = "<p class='success'><i class='fas fa-check'></i>" + res['top_success'] + "</p>"
    }
    else {
      contactFormStatus.innerHTML = "<p class='error'><i class='fas fa-times'></i>" + res['email_error'] + "</p>"
    }
  });
})