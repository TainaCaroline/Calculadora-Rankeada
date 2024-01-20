let saldoRankeado = calculadoraRankeada(100, 8)
let classificacao = classificacaoRankeado(saldoRankeado)

function calculadoraRankeada(vitoria, derrota){

    return vitoria - derrota
}


function classificacaoRankeado(saldoRankeado){
    let nivel = ''

    if(saldoRankeado <= 10){
        nivel = 'Ferro'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for menor do que 10 = Ferro

    } else if((saldoRankeado >= 11) && (saldoRankeado <= 20)){
        nivel = 'Bronze'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for entre 11 e 20 = Bronze

    } else if((saldoRankeado >= 21) && (saldoRankeado <= 50)){
        nivel = 'Prata'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for entre 21 e 50 = Prata

    } else if((saldoRankeado >= 51) && (saldoRankeado <= 80)){
        nivel = 'Ouro'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for entre 51 e 80 = Ouro

    } else if((saldoRankeado >= 81) && (saldoRankeado <= 90)){
        nivel = 'Diamante'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for entre 81 e 90 = Diamante

    } else if((saldoRankeado >= 91) && (saldoRankeado <= 100)){
        nivel = 'Lendário'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for entre 91 e 100= Lendário

    } else {
        nivel = 'Imortal'
        console.log("O Herói tem de saldo de " + saldoRankeado + " está no nível de " + nivel)
        //Se vitórias for maior ou igual a 101 = Imortal

    }
}

