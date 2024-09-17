function getZodiacSign(day, month) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquário";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Áries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Touro";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Câncer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leão";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgem";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Escorpião";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagitário";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricórnio";
    }
}

document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const output = document.getElementById('output');

    if (day && month) {
        const zodiacSign = getZodiacSign(day, month);
        output.textContent = `Seu signo astrológico é: ${zodiacSign}`;
    } else {
        output.textContent = "Por favor, insira um dia e mês válidos.";
    }
});