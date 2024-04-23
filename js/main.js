//*initializam elementele galeriei sa fie clickabile
new SimpleLightbox({elements: ".galerie-container a"});

new SimpleLightbox({elements: ".orar-imagini a"});

AOS.init({ once: true});

emailjs.init("ENTzDeK3F2tfJPlbz")

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {
    

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_41b5mwc", "template_l45r08c", date)//*de pe site email.js
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

}