function tocaSom(idAudio) {
  const audioElement = document.querySelector(idAudio)

  if (audioElement && audioElement.localName === "audio") {
    audioElement.play()
  } else {
    console.log("Elemento não encontrado.")
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i]
  const instrumento = tecla.classList[1]

  tecla.onclick = function () {
    tocaSom(`#som_${instrumento}`)
  }

  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa")
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa")
  }
}
