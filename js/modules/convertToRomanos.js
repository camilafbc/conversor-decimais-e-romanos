import { saidaRomanos } from './constants.js';

function convertToRomanos(entrada){
    const romanos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const valores = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let result = ""

    for(let i = romanos.length - 1; i >= 0; i--){
        while(entrada >= valores[i]){
            result += romanos[i]
            entrada -= valores[i]
        }
    }

    saidaRomanos.innerText = result

}

async function copyRomanos(x){
    await navigator.clipboard.writeText(x)
}

export { convertToRomanos, copyRomanos }