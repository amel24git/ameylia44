document.addEventListener("DOMContentLoaded", function () {


    /* ================================================= */
    /* ===================== NAVIGASI ================== */
    /* ================================================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    const pages =
        document.querySelectorAll(".page");


    function showPage() {

        let current =
            window.location.hash;


        if (!current) {

            current = "#beranda";

        }


        pages.forEach(function (page) {

            if ("#" + page.id === current) {

                page.classList.add("active-page");

            } else {

                page.classList.remove("active-page");

            }

        });


        navLinks.forEach(function (link) {

            if (
                link.getAttribute("href")
                === current
            ) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                setTimeout(
                    showPage,
                    10
                );

            }
        );

    });


    window.addEventListener(
        "hashchange",
        showPage
    );


    showPage();



    /* ================================================= */
    /* ====================== FORM ===================== */
    /* ================================================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                alert(
                    "Pesan berhasil dikirim! " +
                    "Terima kasih sudah menghubungi " +
                    "Desa Pusaka. ✨"
                );


                contactForm.reset();

            }
        );

    }



    /* ================================================= */
    /* ==================== FOTO ======================= */
    /* ================================================= */

    const images =
        document.querySelectorAll(
            ".gallery-image img"
        );


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Foto tidak ditemukan: "
                    + image.getAttribute("src")
                );

            }
        );

    });

});