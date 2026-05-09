document.addEventListener("DOMContentLoaded", () => {
      
  emailjs.init("MtC8DB9GNrCLRndjE");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {

      e.preventDefault();

      try {

          await emailjs.sendForm(
              "service_rwexaka",
              "template_2fm5gpm",
              form
          );

          Swal.fire({
              icon: "success",
              title: "Uğurlu!",
              text: "Mesajınız göndərildi.",
              confirmButtonText: "Bağla"
          });

          form.reset();

      } 
      catch (error) {

          console.log(error);

          Swal.fire({
              icon: "error",
              title: "Xəta!",
              text: "Mesaj göndərilmədi.",
              confirmButtonText: "Bağla"
          });

      }

  });

});