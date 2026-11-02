// ============================================================
// ZARRAR BIN ADNAN TRAVEL AND TOURS — SITE CONFIG
// >>> EDIT ONLY THIS FILE to update the whole website <<<
// ============================================================
const CONFIG = {
  // Warburton branch contact given by user on 2026-10-22
  whatsappNumber: "923006086398",
  phoneDisplay: "+92 300 6086398 — Sheikh Imran Maqbool (Warburton Office)",
  officeAddress: "Sheikh Medical Store, Near Masjid Allah Wali, Mohallah Eid Gah, Warburton, Tehsil & District Nankana Sahib",
  officeHours: "Open 7 Days (Sat–Fri), 8:00 AM – 8:00 PM",
  email: "info@zbatravels.com",

  businessName: "Zarrar Bin Adnan Travel and Tours Ltd.",
  tagline: "Travel With Grace",
  facebookUrl: "https://www.facebook.com/", // TODO: paste real Facebook Page/profile link
  areaServed: ["Warburton", "Nankana Sahib", "Shahkot", "Sangla Hill", "Sheikhupura", "Lahore", "Faisalabad"],
};

// Builds a WhatsApp chat link with a pre-filled message (the #1 high-CTR pattern:
// every competitor funnels to WhatsApp — Perfect Umrah uses a different pre-filled
// message per package, which is exactly what this does).
function waLink(message) {
  return "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
}

// On page load: wire every [data-wa] button to WhatsApp with its own message,
// and fill every [data-config] text slot from CONFIG above.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-wa")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (CONFIG[key]) el.textContent = CONFIG[key];
  });
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
