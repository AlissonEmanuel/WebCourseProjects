function calcular(tipo, valor){
	if (tipo === 'acao'){
		
		switch(valor){
			case '*':
			case '-':
			case '+':
			case '/':
			case '.':
				document.getElementById('calcbox').value += valor;
				break;
			case 'c':
				document.getElementById('calcbox').value = '';
				break;
			case '=':
				
				var result = document.getElementById('calcbox').value;
				
				if (result == '') {
					result = 0;
				} else {
					document.getElementById('calcbox').value = eval(result);
				}
				break;
		}

	} else if (tipo === 'valor'){
		document.getElementById('calcbox').value += valor;
	}
}