// Declaração de variáveis
const d4 = document.getElementById("d4")
const d6 = document.getElementById("d6")
const d8 = document.getElementById("d8")
const d10 = document.getElementById("d10")
const d12 = document.getElementById("d12")
const d20 = document.getElementById("d20")
const d100 = document.getElementById("d100")
const rgbns = document.getElementById("rgbns")
const imagens = document.getElementById("imgs")
let res = 0;

function rolagem(lados){ // Função para a rolagem dos dados
    const n = parseInt(document.getElementById("num").value);
    const msg = `V0cê Ro70u Um >${n}d${lados}< 3 o r3sult4do f01:`;
    let soma = 0;
    let resultados = [];
    let fotos = [];
    
    for (let i = 0; i < n; i++){
        if(lados === 100){
            const dezena = Math.floor(Math.random() * 10);
            const unidade = Math.floor(Math.random() * 10);
            const res = (dezena * 10) + unidade;
            fotos.push(`<img src="rolagens/ddez_${dezena}0.png" class="rolagem">`)
            fotos.push(`<img src="rolagens/d10_${unidade}.png" class="rolagem">`)
            // Caso diferente para rolagens d100
            // Duas imagens são geradas: Um dado de dezena e o outro de unidade.
            // A soma dos dados é o resultado da rolagem de um d100
            resultados.push(res);
            soma += res;
        }

        else{
            const res = Math.floor(Math.random() * lados) + 1;
            resultados.push(res);
            soma += res;
            fotos.push(`<img src="rolagens/d${lados}_${res}.png" class="rolagem">`)
        }
    }

    document.getElementById("dado").textContent = msg;
    document.getElementById("rgbns").textContent = soma;
    document.getElementById("sum").textContent = soma;
    document.getElementById("rsltds").textContent = resultados.join(", ");
    imagens.innerHTML = fotos.join(" ")
}

// Chamada de função ao clicar em cada botão específico
document.getElementById("d4").onclick = () => rolagem(4);
document.getElementById("d6").onclick = () => rolagem(6);
document.getElementById("d8").onclick = () => rolagem(8);
document.getElementById("d10").onclick = () => rolagem(10);
document.getElementById("d12").onclick = () => rolagem(12);
document.getElementById("d20").onclick = () => rolagem(20);
document.getElementById("d100").onclick = () => rolagem(100);