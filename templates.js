/* ============================================
   NIPUNIKA STUDIO — TEMPLATES PAGE JAVASCRIPT
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       NAVBAR SCROLL EFFECT
       ============================================ */

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        const handleNavbarScroll = () => {
            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleNavbarScroll, {
            passive: true
        });

        handleNavbarScroll();
    }


    /* ============================================
       MOBILE MENU
       ============================================ */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {
            const isActive = mobileMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open", isActive);
            menuBtn.setAttribute("aria-expanded", isActive);
        });


        /* Close menu when clicking a mobile link */

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                document.body.classList.remove("menu-open");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });


        /* Close menu with Escape key */

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                mobileMenu.classList.remove("active");
                document.body.classList.remove("menu-open");
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* ============================================
       SCROLL REVEAL
       ============================================ */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.08
            }
        );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

    }


    /* ============================================
       TEMPLATE FILTER
       ============================================ */

    const filterButtons = document.querySelectorAll(".template-filter");
    const templateCards = document.querySelectorAll(".market-template-card");
    const emptyMessage = document.querySelector("#templateEmpty");


    if (filterButtons.length > 0 && templateCards.length > 0) {

        const filterTemplates = (filter) => {

            let visibleCount = 0;

            templateCards.forEach((card) => {

                const cardType = (card.dataset.type || "")
                    .toLowerCase()
                    .trim();

                const cardTypes = cardType
                    ? cardType.split(/\s+/)
                    : [];

                const isVisible =
                    filter === "all" ||
                    cardTypes.includes(filter.toLowerCase());

                if (isVisible) {

                    card.hidden = false;
                    visibleCount++;

                } else {

                    card.hidden = true;

                }

            });


            /* Show / hide empty message */

            if (emptyMessage) {

                if (visibleCount === 0) {
                    emptyMessage.hidden = false;
                } else {
                    emptyMessage.hidden = true;
                }

            }

        };


        filterButtons.forEach((button) => {

            button.addEventListener("click", () => {

                /* Remove active state */

                filterButtons.forEach((item) => {
                    item.classList.remove("active");
                    item.setAttribute("aria-selected", "false");
                });


                /* Add active state */

                button.classList.add("active");
                button.setAttribute("aria-selected", "true");


                /* Get selected filter */

                const filter = (
                    button.dataset.filter || "all"
                ).toLowerCase().trim();


                filterTemplates(filter);

            });

        });


        /* Apply default filter */

        const activeButton =
            document.querySelector(".template-filter.active");

        const initialFilter = activeButton
            ? (
                activeButton.dataset.filter || "all"
            ).toLowerCase().trim()
            : "all";

        filterTemplates(initialFilter);

    }


    /* ============================================
       CURRENT YEAR
       ============================================ */

    const yearElements = document.querySelectorAll("[data-year]");

    yearElements.forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    /* ============================================
       SMOOTH ANCHOR SCROLLING
       ============================================ */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }


            const targetId = href.substring(1);
            const target = document.getElementById(targetId);

            if (!target) {
                return;
            }


            event.preventDefault();


            const navbarHeight = navbar
                ? navbar.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight -
                15;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ============================================
       BACK TO TOP
       ============================================ */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        backTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ============================================
       END
       ============================================ */

});
