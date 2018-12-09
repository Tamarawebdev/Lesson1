function modal() {

    let descriptionBtnAndMore = document.querySelectorAll(".description-btn, .more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");


    descriptionBtnAndMore.forEach(function (e) {
        e.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        this.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

}
module.exports = modal;
