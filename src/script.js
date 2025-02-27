function calcularIdade(){
    let anoDigitado = 
    document.getElementById("anoNascimento").value;
    let idade = 2025 - anoDigitado;
    console.log(idade);
    document.getElementById("resultado").innerHTML =
    `Sua idade é ${idade}`;
}

// Novas implementações
// - Utilizar o ano atual.
// - Aceitar apenas ano maior do que 1900.
// - Não permitir que o input seja vazio.