const clickTag = "https://exemplo.com/soda-cola";
const creative = document.querySelector("#interactive-skyscraper");
const canvas = document.querySelector("#burst");
const context = canvas.getContext("2d");
let hasExploded = false;

creative.href = clickTag;

creative.addEventListener("click", (event) => {
    if (hasExploded) {
        return;
    }

    event.preventDefault();
    hasExploded = true;
    creative.classList.add("is-exploded");
    emitBurst();
});

function emitBurst() {
    const fragments = Array.from({ length: 32 }, (_, index) => ({
        angle: (Math.PI * 2 * index) / 32,
        distance: 45 + (index % 5) * 17,
        radius: 2 + (index % 3),
        progress: 0
    }));
    const origin = { x: 80, y: 227 };
    const startedAt = performance.now();

    function frame(now) {
        const progress = Math.min((now - startedAt) / 700, 1);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#f7df78";

        fragments.forEach((fragment) => {
            const distance = fragment.distance * progress;
            const x = origin.x + Math.cos(fragment.angle) * distance;
            const y = origin.y + Math.sin(fragment.angle) * distance;
            context.globalAlpha = 1 - progress;
            context.beginPath();
            context.arc(x, y, fragment.radius, 0, Math.PI * 2);
            context.fill();
        });

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    requestAnimationFrame(frame);
}