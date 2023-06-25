const romanos = ["I", "V", "X", "L" , "C", "D", "M"]
const values = [1, 5, 10, 50, 100, 500, 1000]

const saida = document.getElementById("saida-decimal")

function convertToDecimais(entrada){
    let value = 0

    for(let i = 0; i < entrada.length; i++){
        let curr_rom = romanos.indexOf(entrada[i])
        let next_rom = romanos.indexOf(entrada[i + 1])
        let curr_value = values[curr_rom]
        let next_value = values[next_rom]
        
        curr_value < next_value ? value -= curr_value : value += curr_value
    }
    
    saida.innerText = value
}

async function copyDecimais(x){
    await navigator.clipboard.writeText(x)
}

export { convertToDecimais, copyDecimais }