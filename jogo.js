



/*redimensionamento*/
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var mosquitoTempo =1500

var nivel = (window.location.search)
nivel = nivel.replace('?','')
if (nivel === 'normal') {
	mosquitoTempo = 3000
}else if (nivel === 'dificil') {
	mosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	mosquitoTempo = 750
}

function redimensionaTela(){
	altura = window.innerHeight 
	largura = window.innerWidth
	console.log(altura, largura)
}
redimensionaTela()


var cronometro = setInterval(function(){
	tempo-=1

	if (tempo<0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else{
			document.getElementById('cronometro').innerHTML= tempo
	}




},1000)


/*criando posições aleatórias*/
function posicaoRandomica(){
		//Apagar o mosquito anterior
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()


		if (vidas>3) {
			window.location.href ='fim_jogo.html'
		}else{
		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
		vidas++
		console.log('v'+ vidas + 'Foi perdida no jogo')			
		}
		



	}

	 var posicaoY = Math.floor(Math.random() * (altura) )-50;
	 var posicaoX= Math.floor(Math.random() * (largura) )-50;

	 posicaoX = posicaoX<0 ? 0 : posicaoX;
	 posicaoY = posicaoY<0 ? 0 : posicaoY;
	  
	 
	 // Criar o elemento html

	 var mosquito = document.createElement('img')
	 mosquito.src ='imagens/mosquito.png'
	 mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	 mosquito.style.left = posicaoX +'px'
	 mosquito.style.top = posicaoY + 'px'
	 mosquito.style.position = 'absolute'
	 mosquito.id = 'mosquito'	
	 mosquito.onclick = function(){
	 	this.remove()}

 	 document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3);
	console.log(classe)
	switch(classe){
		case 0: 
		return 'mosquito1'
		case 1: 
		return 'mosquito2'
		case 2: 
		return 'mosquito3'
		

	}


}

function ladoAleatorio(){
	var lado = Math.floor(Math.random()*2);
	console.log(lado)
	switch(lado){
		case 0: 
		return 'ladoA'
		case 1: 
		return 'LadoB'
		

	}
}








