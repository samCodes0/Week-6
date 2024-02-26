/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// creating the chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}  // fill in things here later.
})

// this array contains a list of all the colors that will be used in the chart
// the first color will be used for the first expense, and so on and so on
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


// adds the expense to the chart
function addExpenseToChart(name, amount) {
    // adding the expense to the chart
    expenseChart.data.labels.push(name);
    expenseChart.data.datasets[0].data.push(amount);

    let colorCount = expenseChart.data.datasets[0].backgroundColor.length
    let color = chartColors[colorCount % chartColors.length]

    expenseChart.data.datasets[0].backgroundColor.push(color);

    expenseChart.update();
}

// adding functionality to the addExpenseButton
addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // calling function to update the chart
    addExpenseToChart(expenseName, expenseAmount);

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// adding an event listener to click the add to chart button anytime the enter button is clicked
window.addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton];
        if (inputElements.includes(document.activeElement)) {
            addExpenseButton.click();
            expenseNameInput.focus();
        }
    }
})