emailjs.init({
    publicKey: "WyGUisefoe8BkPMmO"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

        from_name: document.getElementById("name").value,

        from_email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    emailjs.send(
        "service_k1hg2ks",
        "template_js6811q",
        params
    )

    .then(function(){

        alert("Message Sent Successfully ✅");

        form.reset();

    })

    .catch(function(error){

        alert("Failed to Send Message ❌");

        console.log(error);

    });

});