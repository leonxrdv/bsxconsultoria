document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD'; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const realRate = data.rates.BRL;
            const dollarRate = data.rates.USD; 
            const exchangeRateDisplay = document.getElementById('exchange-rates');
            exchangeRateDisplay.textContent = `USD: ${dollarRate}, BRL: ${realRate}`;
        })
        .catch(error => {
            console.error('Erro ao buscar taxas de câmbio:', error);
            document.getElementById('exchange-rates').textContent = 'Erro ao carregar taxas';
        });
});


    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('#nav-links').classList.toggle('active');
    });






