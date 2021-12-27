function enviar() {
    var b1 = document.querySelector('input#n1')
    var b2 = document.querySelector('input#n2')
    var b3 = document.querySelector('input#n3')
    var b4 = document.querySelector('input#n4')
    var resultado = document.querySelector('div#resultado')
    b1 = Number(b1.value)
    b2 = Number(b2.value)
    b3 = Number(b3.value)
    b4 = Number(b4.value)

    var media = (b1 + b2 + b3 + b4)/4
    console.log(media)
    resultado.innerHTML = `Sua media é <strong>${media}</strong>` 

    if (media < 0) {
        window.alert('EI!! Nota negativa não vale. Atualize a página e tente novamente')
    }  else if (media <= 6) {
        resultado.innerHTML += `<strong>, você reprovou! </strong> \u{1F44E}`
    } else {
        resultado.innerHTML += `<strong>, você passou! </strong> \u{1F44C}`
    }
}