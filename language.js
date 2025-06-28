document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("language-select");
  const elements = document.querySelectorAll("[data-en]");

  function setLanguage(lang) {
    elements.forEach(el => {
      const value = el.getAttribute(`data-${lang}`);
      if (value) el.textContent = value;
    });
    localStorage.setItem("language", lang);
    select.value = lang;
  }

  select.addEventListener("change", () => {
    setLanguage(select.value);
  });

  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
});
