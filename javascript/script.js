window.addEventListener("DOMContentLoaded", function (e) {
    let emailInput = document.getElementById("email-input");

    emailInput.setAttribute('value','Email Address');

    emailInput.addEventListener("click", function (e) {
        emailInput.setAttribute('value', '');
    });

    let emailButDiv = document.getElementById("email-button-div");

    emailButDiv.addEventListener("click", function (e) {
        try {
            document.querySelector("#email-input:invalid").classList.add("wrong-input");
            document.getElementById("alert-message").classList.remove("not-visible");
            document.getElementById("alert-icon").classList.remove("not-displayed");
        } catch (error) {
            console.log('El email es valido')
        }

    });

    emailButDiv.addEventListener("click", function (e) {
        try {
            document.querySelector("#email-input:valid").classList.remove("wrong-input");
            document.getElementById("alert-message").classList.add("not-visible");
            document.getElementById("alert-icon").classList.add("not-displayed");
        } catch (error) {
            console.log('El email no es valido')
        }
    });

    
});