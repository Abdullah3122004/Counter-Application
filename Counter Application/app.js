let counterValue = 0;
const counterElement = document.getElementById('counter');
const evenOddElement = document.getElementById('evenOdd');

function updateCounter() {
    counterElement.textContent = counterValue;
    evenOddElement.textContent = counterValue % 2 === 0 ? 'Even' : 'Odd';
    evenOddElement.style.color = counterValue % 2 === 0 ? 'green' : 'red';
    if(counterElement<9){
        counterElement.innerText= "0"+ counterValue
    }
}

function increment() {
    counterValue++;
    updateCounter();
    if(counterElement>9){
        counterElement.innerText= "0"+ counterValue
    }
}

function decrement() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

function reset() {
    counterValue = 0;
    updateCounter();
}
