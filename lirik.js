const lyrics = [
    "Hari ini, hari yang kau tunggu",
    "Bertambah satu tahun, usiamu,",
    "Bahagialah selalu",
    "Yang kuberi, bukan jam dan cincin",
    "Bukan seikat bunga, atau puisi,",
    "Juga kalung hati",
    "Maaf, bukannya pelit,",
    "Atau nggak mau bermodal dikit",
    "Yang ingin aku, beri padamu",
    "Doa se tulus hati ...",
    "Semoga Tuhan", 
    "melindungi kamu",
    "Serta tercapai semua angan dan cita-citamu",
    "Mudah-mudahan",
    "diberi umur panjang",
    "Sehat selama lamanya",
    "."
];

const lyricsElement = document.getElementById("lyrics");
const singButton = document.getElementById("singButton");
const audio = document.getElementById("audio");

let index = 0;
let intervalId;

function sing() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        singButton.textContent = "Nyanyikan";
        audio.pause();
    } else {
        intervalId = setInterval(updateLyrics, 5000);
        singButton.textContent = "Berhenti Nyanyikan";
        audio.play();
    }
}

function updateLyrics() {
    if (index < lyrics.length - 1) {
        lyricsElement.textContent = lyrics[index];
        index++;
    } else {
        clearInterval(intervalId);
        lyricsElement.textContent = ".";
        singButton.textContent = "Nyanyikan Lagi";
        audio.pause();
    }
}

singButton.addEventListener("click", sing);

function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 1000); // Ganti warna setiap 1 detik
