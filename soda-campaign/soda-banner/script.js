function clickTag() {
    window.open("https://www.youtube.com", "_blank");
}

window.onload = function() {
    const tl = gsap.timeline();

    tl.to("#lata", { duration: 0.8, opacity: 1, x: 10, ease: "back.out(1.7)" })
      .to("h1", { duration: 1, opacity: 1, y: 0, ease: "power2.out" }, "-=0.4");
};