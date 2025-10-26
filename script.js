const message = `Aku minta maaf.\n\nAku sadar, aku tidak seperti pria lain yang mungkin kamu harapkan. Aku punya banyak kekurangan, dan mungkin itu membuatmu kecewa.\n\nTetapi, di hatiku yang terdalam ini. Aku selalu berusaha memberikan yang terbaik untuk mu.\n\nMaafkan aku jika seringkali aku tak mampu menjadi seperti yang kamu inginkan. Yang pasti, aku tetap di sini. Tetap berusaha, untuk mu.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
