document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    emailjs.init("fxN3X3o6LgcCYpU9E");

    const params = {
        from_email: email,
        from_name: name,
        subject: subject,
        message: message
    };

    if(!subject){
        const result = confirm("Subject is empty! Are you sure you want to send the email?");

        if(result === true){
            sendEmail();
        }else{

        }
    }else{
        sendEmail();
    }

    function sendEmail(){
        emailjs.send("service_11699ge", "template_2yjt93s",params).then(function(response){
            alert("Email was sent successfully!");
            form.reset();
        }, function(error){
            alert("Error sending email");
        });
    }
});