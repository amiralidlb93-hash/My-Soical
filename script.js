// Small entrance animation for the link cards.
document.querySelectorAll(".link-card").forEach((card, index) => {
  card.animate(
    [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 450, delay: index * 120, easing: "ease-out", fill: "both" }
  );
});
