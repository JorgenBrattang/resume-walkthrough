function sendMail(contactForm) {
    emailjs.send("gmail", "template_id", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
}