// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Solamente yo quería 😘", time: 17 },
  { text: "Decirte por si no sabías", time: 20 },
  { text: "Que estoy pensando en ti cada momento ", time: 23 },
  { text: "Siento aquellas vibraciones", time: 30 },
  { text: "Idioma de los corazones 💓", time: 34 },
  { text: "Que aprendieron a amarse del modo ideal", time: 37 },
  { text: "Lo nuestro no tiene final", time: 40 },
  { text: "Un pacto con Dios hicimos tú y yo 😇", time: 43 },
  { text: "Y nada en el mundo tiene más valor", time: 47 },
  { text: "Así es este amor que no se rompe, no, no, no", time: 51 },
  { text: "No me cansaré de repetírtelo", time: 57 },
  { text: "Tú vas más allá de ser mi gran pasión", time: 60 },
  { text: "Déjame decirte que...💓", time: 65 },
  { text: "Que te quiero 🙈", time: 67 },
  { text: "Tú naciste siendo bella (bella)", time: 87 },
  { text: "Más bella que cualquier estrella", time: 90 },
  { text: "Así eres tú, para mí, así eres tú (así eres)", time: 94 },
  { text: "Parecía fantasía 🙈", time: 101 },
  { text: "Que alcanzarte no podría", time: 104 },
  { text: "Y aprendimos a amarnos del modo ideal", time: 107 },
  { text: "Lo nuestro no tiene final 😍", time: 111 },
  { text: "Un pacto con Dios hicimos tú y yo 😇", time: 113 },
  { text: "Y nada en el mundo tiene más valor", time: 117 },
  { text: "Así es este amor que no se rompe, no, no, no", time: 121 },
  { text: "No me cansaré de repetírtelo", time: 127 },
  { text: "Tú vas más allá de ser mi gran pasión", time: 131 },
  { text: "Déjame decirte que...💓", time: 135 },
  { text: "Que te quiero 🙈", time: 138 },
  { text: "Un pacto con Dios hicimos tú y yo 😇", time: 141 },
  { text: "Y nada en el mundo tiene más valor", time: 144},
  { text: "Así es este amor que no se rompe", time: 149},
  { text: "No me cansaré de repetírtelo", time: 154 },
  { text: "Tú vas más allá de ser mi gran pasión", time: 158 },
  { text: "Déjame decirte que...💓", time: 163 },
  { text: "Que te quiero 🙈", time: 165.5 },
  { text: "Un pacto con Dios hicimos tú y yo 😇", time: 167.5 },
  { text: "Y nada en el mundo tiene más valor", time: 171 },
  { text: "Así es este amor que no se rompe", time: 176 },
  { text: "No me cansaré de repetírtelo", time: 181 },
  { text: "Tú vas más allá de ser mi gran pasión", time: 186},
  { text: "Déjame decirte que...💓", time: 190},
  { text: "Que te quiero 🙈", time: 193 },
  { text: "¡Oh! Oh-oh-oh", time: 195 },
  { text: "Y vivo contigo 😍", time: 221},
  { text: "Y muero contigo 😍", time: 225},
  { text: "Déjame decirte que...", time: 227},
  { text: "💖Que te quiero💖", time: 230},
  { text: "Te quiero (uhh)", time: 244},
  { text: "💖 ISABEL M. 💖", time: 249},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);