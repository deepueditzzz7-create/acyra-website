document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                navigation.classList.contains("open")
            );

        });

    }


    // COOKIE CONSENT

    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");
    const rejectCookies = document.getElementById("rejectCookies");

    const cookieChoice = localStorage.getItem("acyraCookieConsent");

    if (!cookieChoice && cookieBanner) {

        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 800);

    }


    if (acceptCookies) {

        acceptCookies.addEventListener("click", () => {

            localStorage.setItem(
                "acyraCookieConsent",
                "accepted"
            );

            cookieBanner.classList.remove("show");

        });

    }


    if (rejectCookies) {

        rejectCookies.addEventListener("click", () => {

            localStorage.setItem(
                "acyraCookieConsent",
                "rejected"
            );

            cookieBanner.classList.remove("show");

        });

    }


    // SIMPLE SCROLL REVEAL

    const revealElements = document.querySelectorAll(
        ".service-card, .feature-list > div, .talent-panel > div"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});