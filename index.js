// Fiz um index html para eu depurar o código

let nivel = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina", 
    "Ascendente", 
    "Imortal", 
    "Radiante"
];

let heroiXP = 9002; 
let heroiNivel;

for (let i = 0; i < nivel.length; i++) {
    if (
        (i === 0 && heroiXP <= 1000) ||
        (i === 1 && heroiXP >= 1001 && heroiXP <= 2000) ||
        (i === 2 && heroiXP >= 2001 && heroiXP <= 5000) ||
        (i === 3 && heroiXP >= 5001 && heroiXP <= 7000) ||
        (i === 4 && heroiXP >= 7001 && heroiXP <= 8000) ||
        (i === 5 && heroiXP >= 8001 && heroiXP <= 9000) ||
        (i === 6 && heroiXP >= 9001 && heroiXP <= 10000) ||
        (i === 7 && heroiXP > 10000)
    ) {
        nivelHeroi = nivel[i];
        break;
    }
}

heroiNome = "Teste" // Digite aqui o nome do Herói...

console.log("O Herói de nome " + heroiNome + " está no nível " + nivelHeroi);
