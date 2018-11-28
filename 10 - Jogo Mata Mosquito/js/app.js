var altura = 0;
var largura = 0;
var vidas = 3;
var time = 10;

var dificuldade = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal'){
	var dificuldade = 1500;
} else if (nivel === 'dificil'){
	var dificuldade = 1000;
} else if (nivel === 'brainfuck'){
	var dificuldade = 750;
}

function ajustarPalco(){

	altura = window.innerHeight;
	largura = window.innerWidth;
}

ajustarPalco();

var timer = setInterval(function(){
	
	time--;

	if(time < 0){
		clearInterval(timer);
		clearInterval(criarMosquito);
		window.location.href = "./vitoria.html";
	} else{
		document.getElementById('timer').innerHTML = time;
	}
	
}, 1000);

function posicaoRandomica(){

	if (document.getElementById('mosquito')) {

		while (document.getElementById('mosquito')){
			document.getElementById('mosquito').remove();

			if (vidas <= 0){
				window.location.href = "./game_over.html";
			} else{
				document.getElementById('v' + vidas).src = "./img/coracao_vazio.png";
				vidas--;
			}
		}
	}

	

	// Criando o elemento
	function criarMosquito(){

		var px = Math.floor(Math.random() * largura) - 90;
		var py = Math.floor(Math.random() * altura) - 90;

		px = px < 0 ? 0 : px;
		py = py < 0 ? 0 : py;

		var mosquito = document.createElement('img');
		mosquito.src = './img/mosquito.png';
		mosquito.className = 'mosquito' + tamanhoAleatorio() + ' ' + 'lado' + ladoAleatorio();
		mosquito.style.left = px + 'px';
		mosquito.style.top = py + 'px';
		mosquito.style.position = 'absolute';
		mosquito.id = 'mosquito'
		mosquito.onclick = function(){
			this.remove();
		};

		document.body.appendChild(mosquito);
	}

	criarMosquito();
	criarMosquito();
	
}

function tamanhoAleatorio(){
	return Math.floor(Math.random() * 3);
}

function ladoAleatorio(){
	return Math.floor(Math.random()*2);

}
