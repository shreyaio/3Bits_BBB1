// Function to reveal steps one by one for all cards
function revealSteps() {
    const steps = document.querySelectorAll(".step");
    const maxDelay = Math.max(...Array.from(steps).map(step => parseInt(step.getAttribute("data-delay"))));

    for (let i = 0; i <= maxDelay; i++) {
        setTimeout(() => {
            steps.forEach((step) => {
                if (parseInt(step.getAttribute("data-delay")) === i) {
                    step.classList.add("visible");
                }
            });
        }, i * 1000); // 1-second delay between steps
    }
}

// Trigger animations when the page loads
window.onload = revealSteps;