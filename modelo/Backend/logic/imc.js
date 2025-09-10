function calculateImc(height, weight) {
    return Number(weight / (height ** 2)).toFixed(2);
}

function translateImc(imc) {
    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30.0) return 'sobrepeso';
    return 'obesidade';
}

module.exports = {
    calculateImc, translateImc
};