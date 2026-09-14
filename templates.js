/* =========================================================
   NIPUNIKA STUDIO
   TEMPLATES PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-btn");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open"
            );

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "active"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("active");

        });

    }


    /* =====================================================
       TEMPLATE FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".template-filter"
        );


    const templateCards =
        document.querySelectorAll(
            ".market-template-card"
        );


    const emptyMessage =
        document.querySelector(
            "#templateEmpty"
        );


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            /* ---------------------------------------------
               REMOVE ACTIVE FROM ALL FILTER BUTTONS
            --------------------------------------------- */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* ---------------------------------------------
               ADD ACTIVE TO SELECTED BUTTON
            --------------------------------------------- */

            button.classList.add("active");


            let visibleTemplates = 0;


            /* ---------------------------------------------
               FILTER TEMPLATE CARDS
            --------------------------------------------- */

            templateCards.forEach(card => {

                const cardTypes =
                    card.dataset.type
                        .toLowerCase()
                        .split(" ");


                const shouldShow =
                    filter === "all" ||
                    cardTypes.includes(filter);


                if (shouldShow) {

                    card.hidden = false;

                    visibleTemplates++;

                } else {

                    card.hidden = true;

                }

            });


            /* ---------------------------------------------
               EMPTY MESSAGE
            --------------------------------------------- */

            if (emptyMessage) {

                emptyMessage.hidden =
                    visibleTemplates !== 0;

            }

        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    /* Ignore empty # links */

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    /* If target doesn't exist */

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    /* -------------------------------------
                       NAVBAR HEIGHT
                    ------------------------------------- */

                    const navbarElement =
                        document.querySelector(
                            ".navbar"
                        );


                    const navbarHeight =
                        navbarElement
                            ? navbarElement.offsetHeight
                            : 0;


                    /* -------------------------------------
                       TARGET POSITION
                    ------------------------------------- */

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        navbarHeight;


                    /* -------------------------------------
                       SMOOTH SCROLL
                    ------------------------------------- */

                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }
            );

        });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.querySelector(".back-top");


    if (backTop) {

        backTop.addEventListener(
            "click",
            event => {

                event.preventDefault();


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       TEMPLATE BUY / DEMO LINKS
       External links open normally.
       No extra JavaScript needed.
    ===================================================== */


    /* =====================================================
       END
    ===================================================== */

});
