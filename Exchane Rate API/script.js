// function calculate(from, to)
// {
//     fetch(`https://v6.exchangerate-api.com/v6/3855a28a7c682c4b2562d1f8/latest/${from}`)
//     .then(res => res.json())
//     .then(res=> console.log(res["conversion_rates"][`${to}`]))
// }

// calculate(prompt,"INR");


const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const amountOne = document.querySelector('#amount-one');
const amountTwo = document.querySelector('#amount-two');
const rate = document.querySelector('#rate')
const swap = document.querySelector('.swap-rate-container')

currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
amountOne.addEventListener('change',calculate)
amountTwo.addEventListener('change',calculate)
swap.addEventListener('click',()=> {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate()
});

function calculate(){
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/3855a28a7c682c4b2562d1f8/latest/${currency_one}`)
    .then(res => res.json())
    .then(res => {
        amountTwo.value = res["conversion_rates"][`${currency_two}`]*+amountOne.value
    })
}
calculate()