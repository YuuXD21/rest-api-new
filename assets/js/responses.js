let chatModeOn = false;

function getBotResponse(input) {
  if (chatModeOn) {
    if (input === "hallo") {
      return "hallo juga.";
    } else if (input === "help") {
      return "/chatmode off <br> fitur lainnya sedang dipikirkan";
    } else if (input === "/chatmode off") {
      chatModeOn = false;
      return "Mode chat telah dimatikan. Bot hanya akan merespons perintah dengan prefix '/' lagi.";
    }
    else {
      return "Saya tidak mengerti. ketik help untuk bantuan";
    }
  } else {
    if (input.startsWith("/")) {
      switch (input) {
        case "/owner":
          return "Owner saya adalah seorang pemuda yang rajin menabung<br>ig owner: @wrld.yukii";
        case "/apa itu Rest Api?":
          return `
          REST API (Representational State Transfer Application Programming Interface) adalah suatu jenis arsitektur perangkat lunak yang digunakan untuk menghubungkan dan berkomunikasi antara berbagai aplikasi atau sistem komputer melalui jaringan. Cara kerjanya adalah dengan menggunakan protokol HTTP untuk mengirim permintaan (request) dan menerima respons (response) dalam bentuk data, biasanya dalam format JSON atau XML. REST API beroperasi dengan prinsip sederhana, di mana setiap sumber daya (resource) diidentifikasi oleh URL unik dan dapat diakses melalui metode HTTP seperti GET, POST, PUT, atau DELETE. REST API mendukung operasi dasar CRUD (Create, Read, Update, Delete) yang memungkinkan aplikasi untuk membuat, membaca, memperbarui, dan menghapus data dari sistem yang terhubung secara fleksibel dan efisien.`;
        case "/feedback":
          return `Fitur ini akan segera hadir`;
        case "/chatmode on":
          chatModeOn = true;
          return "Chat mode telah diaktifkan.<br>Bot akan merespons semua pesan tanpa prefix";
        default:
          return "Perintah tidak valid. Ketik /help untuk bantuan.";
      }
    } else {
      return "Saya tidak akan merespons pesan ini. Ketik /help untuk bantuan.";
    }
  }
}