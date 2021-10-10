
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
let tipAmount = 0
let peopleNum = 1
let billAmount = 0

function CalculateTip(){
    let tipPerPerson = tipAmount / peopleNum;
    let totalPerPerson = (eval(billAmountInput.value) + tipAmount) / peopleNum;
    perPersonTipP.innerText = `$${tipPerPerson}`
    perPersonTotalP.innerText = `$${totalPerPerson}`
}

function TipChange(tip){
    let tipPercent = tip * .01
    tipAmount = eval(billAmountInput.value * tipPercent)
    CalculateTip()
}

function BillAmountAdded(billAmountNum){
    billAmount = billAmountNum
    CalculateTip()
}

function PeopleAdded (peopleNumInput){
    peopleNum = peopleNumInput
    CalculateTip()
}

percent5Button.addEventListener('click', function() {TipChange(5)})
percent10Button.addEventListener('click', function() {TipChange(10)})
percent15Button.addEventListener('click', function() {TipChange(15)})
percent25Button.addEventListener('click', function() {TipChange(25)})
percent20Button.addEventListener('click', function() {TipChange(20)})
customPercentInput.addEventListener('keyup', function(){TipChange(customPercentInput.value)})
peopleAmountInput.addEventListener('keyup', function(){ PeopleAdded(peopleAmountInput.value)})
billAmountInput.addEventListener('keyup', function() {BillAmountAdded(billAmountInput.value)})

// recalculate on any input
// defaults for basic calculations

CalculateTip()