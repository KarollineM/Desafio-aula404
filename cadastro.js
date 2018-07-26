const fs = require("fs");
console.log ("fs importado com sucesso")
let cadastrar = process.argv [2]
fs.appendFile(cadastro.js, `${cadastrar}\n`, erro => {
    if(erro){
        console.log("Erro ao cadastrar. O erro foi:");
        console.log(erro)
    }
})