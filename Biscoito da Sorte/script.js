// Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openCookie = document.querySelector(".screen1 img")
const tryAgainButton = document.querySelector(".screen2 button")

let randomNumber = Math.round(Math.random() * 14)
let phrases = [
"Não espere, ponha em prática!", 
"Comece onde você está, use o que você tem e faça o que você pode.", 
"Não importa que você vá devagar, contanto que você não pare.",
"A inspiração existe, porém temos que encontrá-la trabalhando.",
"A paz vem de dentro de você mesmo. Não a procure à sua volta.",
"A felicidade é uma jornada, não um destino.",
"Faça pouco ou faça muito, mas faça algo.",
"A simplicidade é a verdadeira elegância.",
"Sorte é o que acontece quando a capacidade encontra a oportunidade.",
"A perseverança é a mãe da boa sorte.",
"Sorte na vida é sentir a felicidade de viver cada momento.",
"A sorte respeita os valentes e oprime os covardes.",
"Sorte no jogo é saber perder!",
"A sorte acompanha quem tem foco, força e fé. Não desanime, ela pode estar ao seu lado!",
"A sorte no jogo só depende da competência do próprio jogador."
]

// Eventos
openCookie.addEventListener("click", fortuneCookie)
tryAgainButton.addEventListener("click", tryAgain)
document.addEventListener("keydown", startWithEnter)

// Funções
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
} 

function fortuneCookie() {
    toggleScreen()
    screen2.querySelector("p").innerText = `${phrases[randomNumber]}`
}

function tryAgain() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 14)
}

function startWithEnter(e) {
    if(e.key == "Enter" && screen2.classList.contains("hide")) {    
        fortuneCookie()
    }
}