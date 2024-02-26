const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from')
const toSelect = document.getElementById('to')
const convertButton = document.getElementById('get-exchange-rate')
console.log(amountInput)
//valyuta kurslari
const usdToUzs =12473;
const  usdToRub = 92;

const uzsToUsd = 0.000080;
const uzsToRub = 0.0075;
const rubToUsd = 0.011;
const rubToUzs = 134;

//valyuta  hisoblash funksiyasi 
const exchangeFunction = async () => {
    const amountValue = amountInput.value;
    const fromSelectValue = fromSelect.value;
    const toSelectValue= toSelect.value;

    //1.inputlarni tekshirish 
    if (amountValue === '') {
        alert('Iltimos summani kiriting');
        return;

    }
    // 2.valyutani tanlash
    if (fromSelectValue === 'usd' && toSelectValue === 'uzs') {
        const result = amountValue * usdToUzs;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}USD`;
        document.getElementById('to-result').innerHTML = `${result}UZS`;
    } else if (fromSelectValue === 'usd'&& toSelectValue ==='rub') {
        const result = amountValue * uzdToRub;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}USD`;
        document.getElementById('to-result').innerHTML = `${result}RUB`;
    } else if (fromSelectValue === 'usd'&& toSelectValue ==='usd') {
        const result = amountValue * uzsToRub;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}UZS`;
        document.getElementById('to-result').innerHTML = `${result}USD`;
    } else if (fromSelectValue === 'usd'&& toSelectValue ==='rub') {
        const result = amountValue * uzsToRub;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}USz`;
        document.getElementById('to-result').innerHTML = `${result}rub`;
    }else if (fromSelectValue === 'usd'&& toSelectValue ==='usd'){
        const result = amountValue * rubToUsd;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}RUB`;
        document.getElementById('to-result').innerHTML = `${result}USD`;
    }else if (fromSelectValue === 'usd'&& toSelectValue ==='uzs') {
        const result = amountValue * rubToUzs;

        document.getElementById('result').classList.remove('d-none');
        document.getElementById('from-result').innerHTML = `${amountValue}RUB`;
        document.getElementById('to-result').innerHTML = `${result}UZS`;
    } else {
        alert('Iltimos valyutani tanlang');
    }
};
    //valyutani hisoblash funksiyasini chaqirish
    convertButton.addEventListener('click',exchangeFunction);
