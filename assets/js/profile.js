document.addEventListener("DOMContentLoaded", function () {
    const submitButtonForm1 = document.querySelector("#submitForm1");
    submitButtonForm1.addEventListener("click", function () {
      Swal.fire({
        title: "Maintenance",
        text: "Maaf, fitur ini sedang dalam pengembangan.",
        icon: "info",
        confirmButtonText: "OK",
      });
    });

    const submitButtonForm2 = document.querySelector("#submitForm2");
    submitButtonForm2.addEventListener("click", function () {
      Swal.fire({
        title: "Maintenance",
        text: "Maaf, fitur ini sedang dalam pengembangan.",
        icon: "info",
        confirmButtonText: "OK",
      });
    });
  });