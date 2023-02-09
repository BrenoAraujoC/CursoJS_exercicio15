function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number (fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                document.body.style.background = "#ee9c0c"
                img.setAttribute('src', 'menino.png')

            }else if (idade < 21){
                document.body.style.background = "#fa610b"
                img.setAttribute('src', 'homem jovem.png')

            }else if (idade < 50) {
                document.body.style.background = "#76958f"
                img.setAttribute('src', 'homem adulto.png')

            }else {
                document.body.style.background = "#b9b59a"
                img.setAttribute('src', 'homem idoso.png')
            }

        }else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                document.body.style.background = "#c3dce0"
                img.setAttribute('src', 'menina.png')
                
            }else if (idade < 21){
                document.body.style.background = "#77002a"
                img.setAttribute('src', 'mulher jovem.png')

            }else if (idade < 50) {
                document.body.style.background = "#8ba29f"
                img.setAttribute('src', 'mulher adulta.png')

            }else {
                document.body.style.background = "#a67658"
                img.setAttribute('src', 'mulher idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}