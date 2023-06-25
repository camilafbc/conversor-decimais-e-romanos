import { convertToDecimais, copyDecimais } from "./modules/convertToDecimais.js";
import { convertToRomanos, copyRomanos } from "./modules/convertToRomanos.js";
import { selectConvertToDecimais } from "./modules/selectConvertToDecimais.js";
import { selectConvertToRomanos } from "./modules/selectConvertToRomanos.js";
import { copyDec, copyRom, toRomanosContent, btnToRomanos, btnToDecimal, btnConvertToDecimal, btnConvertToRomanos, inputRomanos, inputDecimais, saidaDecimal, saidaRomanos } from "./modules/constants.js";

//Organização do display
toRomanosContent.style.display = 'none';

btnToRomanos.addEventListener('click', selectConvertToRomanos)

btnToDecimal.addEventListener('click', selectConvertToDecimais)

//Converter Romanos para Decimais
btnConvertToDecimal.addEventListener('click', () => {
    convertToDecimais(inputRomanos.value)
})

// Converter Decimais para Romanos
btnConvertToRomanos.addEventListener('click', () => {
    convertToRomanos(inputDecimais.value)
    console.log("click")
})


//Funções para copiar para a área de transferência
copyDec.addEventListener('click', () => {
    copyDecimais(saidaDecimal.value)
})

copyRom.addEventListener('click', () => {
    copyRomanos(saidaRomanos.value)
})