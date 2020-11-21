const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelector = document.querySelector('#movie')
var ticketPrice = +movieSelector.value;


container.addEventListener('click', e => {
    if(e.target.className === 'seat' || e.target.className ==='seat selected' )
    {
        e.target.classList.toggle('selected')
        updateSelectedCount()
        
    }
});


movieSelector.addEventListener('change',e => {
    ticketPrice = +e.target.value;
    updateSelectedCount()
})

function updateSelectedCount()
{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeats.length);
    count.innerText = selectedSeats.length
    total.innerText = selectedSeats.length * ticketPrice;
}
