document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");
    const speed = 200; // Animation speed

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / speed;

        const updateCount = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = (count + increment).toFixed(target % 1 !== 0 ? 1 : 0); // Handle decimals
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target.toFixed(target % 1 !== 0 ? 1 : 0); // Ensure correct decimal places
            }
        };

        updateCount();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll
        });
    });
    
});

document.addEventListener("mousemove", (e) => {
    const coins = document.querySelectorAll(".coin");
    const graphs = document.querySelectorAll(".graph");

    // Move coins and graphs based on mouse position
    coins.forEach((coin) => {
        const speed = coin.getAttribute("data-speed"); // Get speed from data attribute
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        coin.style.transform = `translate(${x}px, ${y}px)`;
    });

    graphs.forEach((graph) => {
        const speed = graph.getAttribute("data-speed"); // Get speed from data attribute
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        graph.style.transform = `translate(${x}px, ${y}px)`;
    });
});