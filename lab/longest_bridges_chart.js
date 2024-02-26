let canvas = document.querySelector('#bridge-chart');
// a button that will be used to switch between the large dataset and the small one
let changeDataButton = document.querySelector('#change-data');
let context = canvas.getContext('2d');
// a boolean that will be used to toggle between showing the large data set and the small one
let showLargeBridgeData = false;

// fetching the bridge data from the json file and storing it in the local variable 'largeBridgeData'
let largeBridgeData = [];
fetch('bridge_data.json')
    .then(res => res.json())
    .then(data => {
        largeBridgeData = data.data;
    }).catch(error => {console.error("unable to fetch the bridge data: ", error)});


let bridges = [
    {name: 'Verrazano-Narrows Bridge', cityState: 'New York, NY', span: 1298.4, location: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', cityState: 'San Francisco and Marin, CA', span: 1280.2, location: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge', cityState: 'Mackinaw and St Ignace, MI', span: 1158.0, location: [45.8174, -84.7278]},
    {name: 'George Washington Bridge', cityState: 'New York, NY and New Jersey, NJ', span: 1067.0, location: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', cityState: 'Tacoma and Kitsap, WA', span: 853.44, location: [47.2690, -122.5517]}
]

// creates a new chart object and populates it with the given dataset and then returns it
// should call chart.destroy() on the already created chart if one was already created
let loadBridgeDataSet = (dataSet) => {
    // creating the new chart
    let bridgesChart = new Chart(context, {
        type: 'bar',
        data: {
            datasets: [
                {
                    label: 'Length in Meters',
                    data: [],
                    backgroundColor: 'green'
                }
            ],
            labels: []
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
    });

    // iterating over the dataset and adding the data to the chart
    for (let i in dataSet) {
        let bridge = dataSet[i];
        bridgesChart.data.labels.push(bridge.name);
        bridgesChart.data.datasets[0].data.push(bridge.span);
    }
    bridgesChart.update();
    return bridgesChart;
}

// creating the initial chart with the smaller dataset
let chart = loadBridgeDataSet(bridges)

// adding an event listener to the button to toggle the small and large datasets whenever the button is pressed
changeDataButton.addEventListener('click', function () {
    chart.destroy();
    showLargeBridgeData ? chart = loadBridgeDataSet(bridges) : chart = loadBridgeDataSet(largeBridgeData)
    showLargeBridgeData = !showLargeBridgeData;
})

