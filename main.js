const xyz = document.querySelector('#priceChart')

new Chart(xyz, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Region Hovedstaden',
            data: [80.1, 84.4, 91.6, 96.3, 101.3, 106.9, 110.1, 112.5, 134.1, 141.1],
            borderWidth: 1,
            borderColor: '#65a4a7'
        }, {
            label: 'Region Sjælland',
            data: [76.5, 78.2, 84.3, 86.0, 92.1, 96.2, 98.1, 100.2, 114.8, 117.3],
            borderWidth: 1,
            borderColor: '#add8ce'
        }],


    },
    options: {
        legend: {
            position: 'bottom'
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            y: {
                grid: {
                    display: false
                }
            },
            x: {
                display: false
            }
        }
    }
});