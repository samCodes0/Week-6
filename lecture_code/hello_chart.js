let canvas = document.querySelector('#soda-chart');
let context = canvas.getContext('2d');

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi','Sprite', 'Either', 'Neither'],
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 10, 7, 10],
            backgroundColor: ['red', 'blue', 'yellowgreen', 'green', 'yellow']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})