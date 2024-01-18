let vitorias = 102;
let derrotas = 10;

let { total, level } = calcularRank(vitorias, derrotas);

function calcularRank(vitorias, derrotas){
    let total = vitorias - derrotas;
    let level = " ";
    if (total <= 10){
        level = "Ferro";
    } else if (total >= 11 && total <= 20){
        level = "Bronze";
    } else if (total >= 21 && total <= 50){
        level = "Prata";
    } else if (total >= 51 && total <= 80){
        level = "Ouro";
    } else if (total >= 81 && total <= 90){
        level = "Diamante";
    } else if (total >= 91 && total <= 100){
        level = "Lendário";
    } else if (total >= 101){
        level = "Imortal";
    }
    return { total, level };
}

console.log(`O Herói tem um saldo de ${total} está no nível de ${level}`);