/* =========================================================
   NIPUNIKA STUDIO
   JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {
                return;
            }

            e.preventDefault();

            const target = document.querySelector(targetId);

            const navbarHeight =
                document.querySelector(".navbar").offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    if (
        cursor &&
        follower &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let followerX = 0;
        let followerY = 0;


        document.addEventListener("mousemove", (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";

        });


        function animateCursor() {

            followerX += (mouseX - followerX) * 0.13;
            followerY += (mouseY - followerY) * 0.13;

            follower.style.left = followerX + "px";
            follower.style.top = followerY + "px";

            requestAnimationFrame(animateCursor);

        }

        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, .service, .browser, .social-item"
            );


        interactiveElements.forEach(element => {

            element.addEventListener("mouseenter", () => {

                follower.style.width = "55px";
                follower.style.height = "55px";

                follower.style.background =
                    "rgba(49,92,255,.08)";

                follower.style.borderColor =
                    "rgba(49,92,255,.5)";

            });


            element.addEventListener("mouseleave", () => {

                follower.style.width = "35px";
                follower.style.height = "35px";

                follower.style.background = "transparent";

                follower.style.borderColor =
                    "rgba(255,255,255,.4)";

            });

        });

    }


    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    const magneticElements =
        document.querySelectorAll(".magnetic");


    if (window.matchMedia("(pointer:fine)").matches) {

        magneticElements.forEach(element => {

            element.addEventListener("mousemove", (e) => {

                const rect =
                    element.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;

                element.style.transform =
                    `translate(${x * 0.08}px, ${y * 0.08}px)`;

            });


            element.addEventListener("mouseleave", () => {

                element.style.transform = "";

            });

        });

    }


    /* =====================================================
       PROJECT PARALLAX
    ===================================================== */

    const browsers =
        document.querySelectorAll(".browser");


    if (window.matchMedia("(pointer:fine)").matches) {

        browsers.forEach(browser => {

            browser.addEventListener("mousemove", (e) => {

                const rect =
                    browser.getBoundingClientRect();

                const x =
                    (e.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (e.clientY - rect.top) /
                    rect.height -
                    0.5;

                browser.style.transform =
                    `perspective(900px)
                     rotateY(${x * 2}deg)
                     rotateX(${y * -2}deg)
                     translateY(-6px)`;

            });


            browser.addEventListener("mouseleave", () => {

                browser.style.transform = "";

            });

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll("[data-year]");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

    /* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */

const projectForm = document.querySelector("#projectForm");

if (projectForm) {

    projectForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const project =
            document.querySelector("#project").value;

        const budget =
            document.querySelector("#budget").value;

        const message =
            document.querySelector("#message").value.trim();


        const whatsappMessage =
`Hello Nipunika Studio 👋

I would like to discuss a project.

Name: ${name}

Email: ${email}

Project Type: ${project}

Estimated Budget: ${budget || "Not specified"}

Project Details:
${message}`;


        const whatsappNumber = "94740807853";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank",
            "noopener"
        );

    });

}



});