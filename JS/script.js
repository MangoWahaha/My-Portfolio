const sections = document.querySelectorAll(".strength .skill section");

sections.forEach((section, index) => {
  section.addEventListener("mouseenter", () => {
    // Skala elemen yang dihover
    section.style.transform = "scale(1.2)";

    // Skala elemen sebelumnya
    for (let i = 0; i < index; i++) {
      sections[i].style.transform = "scale(0.8)";
      sections[i].style.background = "rgba(255, 255, 255, 0.2)";
      sections[i].style.color = "rgba(51, 51, 51, 0.3)";
      sections[i].style.backdropFilter = "blur(10px)";
    }

    // Skala elemen sesudahnya
    for (let i = index + 1; i < sections.length; i++) {
      sections[i].style.transform = "scale(0.8)";
      sections[i].style.background = "rgba(255, 255, 255, 0.2)";
      sections[i].style.color = "rgba(51, 51, 51, 0.3)";
      sections[i].style.backdropFilter = "blur(10px)";
    }
  });

  section.addEventListener("mouseleave", () => {
    sections.forEach((sec) => {
      sec.style.transform = "scale(1)";
      sec.style.background = "";
      sec.style.color = "";
      sec.style.backdropFilter = "";
    });
  });
});
