const toDecimalContent = document.getElementById("toDecimalContainer");
const toRomanosContent = document.getElementById("toRomanosContainer");

const inputRomanos = document.querySelector("input[name='recebe-romanos']");
const inputDecimais = document.querySelector("input[name='recebe-decimais']");

const saidaRomanos = document.getElementById("saida-romanos");
const saidaDecimal = document.getElementById("saida-decimal");

const btnToDecimal = document.getElementById("toDecimal");
const btnToRomanos = document.getElementById("toRomanos");

const btnConvertToDecimal = document.getElementById("btn-convert-to-decimal");
const btnConvertToRomanos = document.getElementById("btn-convert-to-romanos");

const copyDec = document.querySelector(".copy-decimais");
const copyRom = document.querySelector(".copy-romanos");


export { btnConvertToDecimal, btnConvertToRomanos, btnToDecimal, btnToRomanos, copyDec, copyRom, inputDecimais, inputRomanos, saidaDecimal, saidaRomanos, toDecimalContent, toRomanosContent } 