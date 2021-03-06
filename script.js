
const peopleAmountInput = document.getElementById('people-amount')
const billAmountInput = document.getElementById('bill-amount')
const customPercentInput = document.querySelector('.btn-custom')
const percent5Button = document.querySelector('.btn-5')
const percent10Button = document.querySelector('.btn-10')
const percent15Button = document.querySelector('.btn-15')
const percent25Button = document.querySelector('.btn-25')
const percent20Button = document.querySelector('.btn-20')
const resetButton = document.querySelector('.btn-reset')
const perPersonTipP = document.getElementById('per-person-tip-total')
const perPersonTotalP = document.getElementById('per-person-total-amount')


let newTipPercent = 20
let currentTipPercent = 20
let peopleNum = 1
let billAmount = 0

// remove btn-highlight class from all buttons and a
function ChangeTipPercent(newTipPercent, currentTipPercent){
    if (currentTipPercent !== newTipPercent){
        percent5Button.classList.remove('btn-highlight')
        percent10Button.classList.remove('btn-highlight')
        percent15Button.classList.remove('btn-highlight')
        percent20Button.classList.remove('btn-highlight')
        percent25Button.classList.remove('btn-highlight')
        switch (newTipPercent){
            case 5:
                percent5Button.classList.add('btn-highlight')
                break
            case 10:
                percent10Button.classList.add('btn-highlight')
                break
            case 15:
                percent15Button.classList.add('btn-highlight')
                break
            case 20:
                percent20Button.classList.add('btn-highlight')
                break
            case 25:
                percent25Button.classList.add('btn-highlight')
                break
        }
    }
}

function CalculateTip(){
    let tipDecimal = newTipPercent * .01
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

    ChangeTipPercent(newTipPercent, currentTipPercent)
    currentTipPercent = newTipPercent
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


// TODO #4 add function to change tip percent button btn-highlight and add function to percent button listener

percent5Button.addEventListener('click', function() {newTipPercent = 5; CalculateTip()})
percent10Button.addEventListener('click', function() {newTipPercent = 10; CalculateTip()})
percent15Button.addEventListener('click', function() {newTipPercent = 15; CalculateTip()})
percent25Button.addEventListener('click', function() {newTipPercent = 25; CalculateTip()})
percent20Button.addEventListener('click', function() {newTipPercent = 20; CalculateTip()})
customPercentInput.addEventListener('keyup', function(){newTipPercent = (customPercentInput.value); CalculateTip()})
peopleAmountInput.addEventListener('keyup', function(){ PeopleAdded(peopleAmountInput.value)})
billAmountInput.addEventListener('keyup', function() {BillAmountAdded(billAmountInput.value)})
resetButton.addEventListener('click', function() {  newTipPercent = 20;
                                                    billAmountInput.value = ""
                                                    billAmount = 0; 
                                                    peopleAmountInput.value = ""
                                                    peopleNum = 1;
                                                    customPercentInput.value =""
                                                    CalculateTip()
                                                }
                            )

// TODO animate buttons

CalculateTip()
