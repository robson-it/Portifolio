/*Criar uma função que retorne se um cartão de crédito é válido e identifique qual a bandeira do cartão.
  
  As bandeiras dos cartões são: amex, aura, diners, discover, enroute, hipercard, jcb, mastercard, visa e voyager.
    A função deve retornar um objeto com as seguintes propriedades:
    - bandeira: nome da bandeira do cartão, caso seja inválido, retornar inválido
    - valido: true se o cartão é válido, false caso contrário
    - numero: número do cartão
*/

function validarCartao() {
    
    const numeroCartao = document.getElementById('numeroCartao').value.replace(/\s+/g, '');
    if (!numeroCartao || numeroCartao.length < 10) {
        alert();
        return;
    }
    const cartao = {
        bandeira: 'invalido',
        valido: false,
        numero: numeroCartao
    };

    const bandeiras = {
        amex: /^3[47][0-9]{13}$/,
        aura: /^((?!504175))^((?!5067))(^50[0-9])/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        enroute: /^(2014|2149)\d{11}$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        mastercard: /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        elo: /^(4011(78|79)|4312(74|75)|4389(35|36)|4514(16|17)|4576(32|33)|5041(75|76)|5067(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])|5090(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])|6277(00|01|02|03|04|05|06|07|08|09)|6363(68|69|70|71|72|73|74|75|76|77|78|79)|6500(31|32|33|34|35|36|37|38|39)|6504(85|86|87|88|89)|6505(05|06|07|08|09)|6507(01|02|03|04|05|06|07|08|09)|6509(01|02|03|04|05|06|07|08|09)|6516(52|53|54|55|56|57|58|59)|6550(00|01|02|03|04|05|06|07|08|09)|6550(10|11|12|13|14|15|16|17|18|19)|6550(20|21|22|23|24|25|26|27|28|29)|6550(30|31|32|33|34|35|36|37|38|39)|6550(40|41|42|43|44|45|46|47|48|49)|6550(50|51|52|53|54|55|56|57|58|59)|6550(60|61|62|63|64|65|66|67|68|69)|6550(70|71|72|73|74|75|76|77|78|79)|6550(80|81|82|83|84|85|86|87|88|89)|6550(90|91|92|93|94|95|96|97|98|99))\d{10}$/,
        voyager: /^8699\d{11}$/
    };
    

    for (let bandeira in bandeiras) {

        if (bandeiras[bandeira].test(numeroCartao)) {
            cartao.bandeira = bandeira;
            cartao.valido = true;
            console.log(cartao);
            inserirLinhaTabela(cartao);
            return cartao;  
        }
    }

    inserirLinhaTabela(cartao);
    return cartao;
}



/*Criar uma função para inserir linhas na tabela do arquivo index.html após a consulta de algum cartão,
a sequência de campos são: número do cartão, válido ou inválido e a bandeira do cartão e a bandeira será a imagem contida na pasta images

*/

function inserirLinhaTabela(cartao) {
    
    const tabela = document.getElementById('tabelaCartoes');
    const linha = tabela.insertRow(1);

    const celulaNumero = linha.insertCell(0);
    const celulaValido = linha.insertCell(1);
    const celulaBandeira = linha.insertCell(2);

    celulaNumero.innerHTML = cartao.numero;
    celulaValido.innerHTML = cartao.valido ? 'Válido' : 'Inválido';
    celulaBandeira.innerHTML =  `<img src="images/${cartao.bandeira}.webp" alt="${cartao.bandeira}" />` ;

}

function alert(){

    const alertDiv = document.createElement('div');
        alertDiv.innerText = 'Informe o número do cartão';
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '100px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
        alertDiv.style.backgroundColor = '#f8d7da';
        alertDiv.style.color = '#721c24';
        alertDiv.style.padding = '50px';
        alertDiv.style.border = '1px solid #f5c6cb';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.zIndex = '1000';
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 3000);

}
