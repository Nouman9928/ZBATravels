// Motion: scroll-reveal + animated counters (no library, keeps the site fast)
document.addEventListener("DOMContentLoaded", function () {
  var targets = document.querySelectorAll("section .card, section .step, .faq details, .gallery figure, h2.title, .lead");
  targets.forEach(function (el) { el.classList.add("reveal"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });

  // Animated trust counters: anything with data-count counts up when visible
  var counters = document.querySelectorAll("[data-count]");
  var io2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, end = parseFloat(el.getAttribute("data-count")), t0 = null;
      function tick(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1200, 1);
        el.textContent = Math.round(end * p);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io2.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { io2.observe(el); });
});
