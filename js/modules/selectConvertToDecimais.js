import { toDecimalContent, toRomanosContent, saidaRomanos, inputDecimais, inputRomanos } from './constants.js';

function selectConvertToDecimais(){
    toDecimalContent.style.display = 'flex';
    toRomanosContent.style.display = 'none';

    saidaRomanos.innerText = ""
    inputDecimais.value = ""
}

inputRomanos.addEventListener('input', () => {
    inputRomanos.value = inputRomanos.value.replace(/[^IVXLCDM]/gi, "").toUpperCase()
})

export { selectConvertToDecimais }