function form() {

    let message = {
        loading: "Loading...",
        success: "Thank you, we will contact you soon!",
        failure: "Something went wrong..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        contactForm = document.getElementById('form'),
        inputContact = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    function sendForm(elem, a) {
        elem.addEventListener("submit", function (event) {
                event.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {

                    return new Promise(function (resolve, reject) {
                        let myRequest = new XMLHttpRequest();
                        myRequest.open("POST", "server.php");
                        myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


                        myRequest.onreadystatechange = function () {
                            if (myRequest.readyState < 4) {
                                resolve();
                            } else if (myRequest.readyState === 4 && myRequest.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        };
                        myRequest.send(data);
                    });
                } // End postData


            function clearInput() {
                for (let i = 0; i < a.length; i++) {
                    a[i].value = "";
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

            });
        } // End sendForm

        sendForm(form, input);
        sendForm(contactForm, inputContact);

        let phone = document.querySelectorAll('[name="phone"]');

        for (let i = 0; i < phone.length; i++) {
            phone[i].addEventListener('input', function () {
                phone[i].value = phone[i].value.replace(/[^0-9 +]/g, "");
            });
        }

}
module.exports = form;