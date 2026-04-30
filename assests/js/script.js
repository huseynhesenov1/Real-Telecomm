(function() {
    emailjs.init({
      publicKey: "YM2n37fNT2wuBPd5S", // emailjs.com-dan
    });
  })();

  window.onload = function () {
    const form = document.getElementById("contact-form");
    const formInputs = document.querySelectorAll("#contact-form input, #contact-form textarea");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Form daxilindəki input-ların boş olub-olmadığını yoxlayırıq
      let empty = false;
      formInputs.forEach(input => {
        if (!input.value.trim()) {
          empty = true;
        }
      });

      if (empty) {
        alert("Zəhmət olmasa bütün xanaları doldurun.");
        return;
      }

      // EmailJS vasitəsilə göndər
      emailjs.sendForm("service_6rbyrzt", "template_f8nkvds", this)
        .then(() => {
          alert("Mesaj göndərildi!");
          form.reset(); // Formu təmizlə
        }, (error) => {
          console.error("FAILED...", error);
          console.error("Xəta:", error);
          alert("Göndərmə zamanı xəta baş verdi.");
        });
    });
  };
