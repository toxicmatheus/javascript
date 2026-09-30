// function mostrarDataHora(){
// //     let data = new Date()
// //     console.log(data.toLocaleString());
// //     console.log(data.getFullYear());
    
// // }

// // mostrarDataHora()

// function imprimirTabuada(numero = 0){
//     for(let i = 0; i <= 10; i++)
//         console.log(`${numero} X ${i} = ${numero*i}`);
        
// }

// imprimirTabuada(4)

// function mostrarAlerta(){
//     alert("Isso é um alerta do JavaScript!");
// }


// function contarAte(numero = 20){
//     for (let i = 0 , i <= numero, i++ )

// }

function verificarIntervalo(numero = 0){
    if (numero >= 10 && numero <= 50){
        console.log(`${numero} "Está no intervalo"`);
    } else {
        console.log(`${numero} "Não está no intervalo"`);
        
    }
}

verificarIntervalo()
verificarIntervalo(10)
verificarIntervalo(25)
verificarIntervalo(75)