const darkModeToggleBtn = document.getElementById("dark-mode-toggle");
    let theme = localStorage.getItem("theme");
    if (theme === "dark") enableDarkMode();
    darkModeToggleBtn.addEventListener("click", () => {
      theme = localStorage.getItem("theme");
      if (theme === "dark") {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    });
    function enableDarkMode() {
      darkModeToggleBtn.style.fill = "white";
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    }
    function enableLightMode() {
      darkModeToggleBtn.style.fill = "#444";
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    }
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addListener((e) => (e.matches ? enableDarkMode() : enableLightMode()));