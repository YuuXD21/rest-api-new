// Collapsible
var coll = document.getElementsByClassName("chat-container");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function getHardResponse(userText) {
  let loadingHtml =
    '<div class="message bot loading"><div class="chat-response"><img src="/img/michie-bot.jpg" alt="profile" /></div><div class="pesan-bot"><h4>LinguaBot</h4><div class="chat-result"><p><span class="loading-text"></span></p></div></div></div>';
  $("#kolom-chat").append(loadingHtml);

  $(".status").text("Mengetik...");
  $(".loading-text").addClass("typing-dots");

  setTimeout(function () {
    var chatBarBottom = document.getElementById("chat-bar-bottom");
    chatBarBottom.scrollIntoView({ behavior: "smooth" });

    let botResponse = getBotResponse(userText);
    let botHtml =
      '<div class="message bot"><div class="chat-response"><img src="/img/michie-bot.jpg" alt="profile" /></div><div class="pesan-bot"><h4>LinguaBot</h4><div class="chat-result"><p>' +
      botResponse +
      "</p></div></div></div>";

    setTimeout(function () {

      $(".bot.loading").remove();

      $("#kolom-chat").append(botHtml);

      $(".status").text("Online");

      if (userText.includes("/chatmode on")) {
        addInput();
      }
    }, 1000); 
  }, 2000);
}

function buttonSendText(sampleText) {
  let userHtml =
    `<div class="message user"><div class="chat-user"><div class="pesan-user"><h4>You</h4><p>` +
    sampleText +
    '</p></div><img src="/img/hu_tao.jpg" alt="profile" /></div></div>';

  $("#textInput").val("");
  $("#kolom-chat").append(userHtml);

  setTimeout(function () {
    getHardResponse(sampleText);
  }, 1000);
}


function sendButton() {
  let userText = $("#usertextInput").val();

  if (userText == "") {
    userText = "I love Hu Tao!";
  }

  let userHtml =
  '<div class="message user"><div class="chat-user"><div class="pesan-user"><h4>You</h4><p>' +
  userText +
  '</p></div><img src="/img/hu_tao.jpg" alt="profile" /></div></div>';

  $("#usertextInput").val("");
  $("#kolom-chat").append(userHtml);

  if (userText === "/chatmode off") {
    $("#userInput").html("");
  }

  setTimeout(function () {
    getHardResponse(userText);
  }, 1000);
}

function ownerButton() {
  buttonSendText("/owner");
}

function apiButton() {
  buttonSendText("/apa itu Rest Api?");
}

function feedbackButton() {
  buttonSendText("/feedback");
}

function chatmodeButton() {
  buttonSendText("/chatmode on");

  if ($("#choice").length) {
    let userInputHtml =
      '<input class="usertextInput" id="usertextInput" type="text" name="search" placeholder="Type any question..." />';
    userInputHtml += '<button onclick="sendButton()">Kirim</button>';

    $("#choice").html(userInputHtml);

    $("#usertextInput").keypress(function (e) {
      if (e.which == 13) {
        sendButton();
      }
    });

    $("#usertextInput").focus();
  }
}


