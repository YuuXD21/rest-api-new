document.addEventListener("DOMContentLoaded", function () {
    const modalChatbot = document.querySelector(".modal-chatbot");
    const floatingWindow = document.querySelector(".floating-window");
    const chatbotIcon = document.querySelector(".modal-chatbot i");

    function toggleFloatingWindow() {
      if (floatingWindow.style.display === "block") {
        floatingWindow.style.display = "none";
        chatbotIcon.classList.remove("fa-times"); 
        chatbotIcon.classList.add("fa-robot");
      } else {
        floatingWindow.style.display = "block";
        chatbotIcon.classList.remove("fa-robot"); 
        chatbotIcon.classList.add("fa-times");
      }
    }

    modalChatbot.addEventListener("click", toggleFloatingWindow);
  });
  