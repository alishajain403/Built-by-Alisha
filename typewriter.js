document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".typewriter");
    const texts = el.getAttribute("data-texts").split("|");
    let currentText = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
        const fullText = texts[currentText];
        let displayedText = fullText.substring(0, charIndex);
        el.innerHTML = highlighted(displayedText);
      
        if (!isDeleting && charIndex < fullText.length) {
          charIndex++;
          setTimeout(type, 100); // slower typing speed (was 80)
        } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(type, 80); // slower deleting speed (was 50)
        } else {
          if (!isDeleting) {
            // Pause before deleting (5–6 seconds)
            isDeleting = true;
            setTimeout(type, 5000);
          } else {
            // Move to next text after deletion
            isDeleting = false;
            currentText = (currentText + 1) % texts.length;
            setTimeout(type, 1000); // short pause before next typing
          }
        }
      }
      
  
    function highlighted(text) {
      if (text.includes("Hi, I'm Alisha")) {
        return text.replace("Hi, I'm Alisha", `<span class="hi-text">Hi, I'm Alisha</span>`);
      }
      return text;
    }
  
    type();
  });
  