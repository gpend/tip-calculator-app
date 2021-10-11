
const peopleAmountInput = document.getElementById('people-amount')
const billAmountInput = document.getElementById('bill-amount')
const customPercentInput = document.querySelector('.btn-custom')
const percent5Button = document.querySelector('.btn-5')
const percent10Button = document.querySelector('.btn-10')
const percent15Button = document.querySelector('.btn-15')
const percent25Button = document.querySelector('.btn-25')
const percent20Button = document.querySelector('.btn-20')
const perPersonTipP = document.getElementById('per-person-tip-total')
const perPersonTotalP = document.getElementById('per-person-total-amount')
let tipPercent = 20
let peopleNum = 1
let billAmount = 0

function CalculateTip(){
    let tipDecimal = tipPercent * .01
    let tipAmount = eval(billAmountInput.value * tipDecimal)
    
    let tipPerPerson = tipAmount / peopleNum;
    // let totalPerPerson = (eval(billAmountInput.value) + tipAmount) / peopleNum;
    if (isNaN((eval(billAmountInput.value) + tipAmount) / peopleNum)){
        var totalPerPerson = 0
    }
    else{
        var totalPerPerson = (eval(billAmountInput.value) + tipAmount) / peopleNum;
    }

    perPersonTipP.innerText = `$${tipPerPerson}`
    perPersonTotalP.innerText = `$${totalPerPerson}`
}

function BillAmountAdded(billAmountNum){
    billAmount = billAmountNum
    CalculateTip()
}

function PeopleAdded (peopleNumInput){
    if (peopleNumInput === ""){
        peopleNum = 1
    }
    else{
        peopleNum = peopleNumInput
    }    
    CalculateTip()
}

percent5Button.addEventListener('click', function() {tipPercent = 5; CalculateTip()}) // TODO change to just return?? tip = 5?
percent10Button.addEventListener('click', function() {tipPercent = 10; CalculateTip()})
percent15Button.addEventListener('click', function() {tipPercent = 15; CalculateTip()})
percent25Button.addEventListener('click', function() {tipPercent = 25; CalculateTip()})
percent20Button.addEventListener('click', function() {tipPercent = 20; CalculateTip()})
customPercentInput.addEventListener('keyup', function(){tipPercent = (customPercentInput.value); CalculateTip()})
peopleAmountInput.addEventListener('keyup', function(){ PeopleAdded(peopleAmountInput.value)})
billAmountInput.addEventListener('keyup', function() {BillAmountAdded(billAmountInput.value)})

// TODO enable reset
// TODO animate buttons
// TODO enable big screens

TipChange(20)
CalculateTip()