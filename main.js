const xyz = document.querySelector('#priceChart')

new Chart(xyz, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Region Hovedstaden',
            data: [80.1, 84.4, 91.6, 96.3, 101.3, 106.9, 110.1, 112.5, 134.1, 141.1],
            borderWidth: 5,
            borderColor: '#65a4a7',
            backgroundColor: '#65a4a7'
        }, {
            label: 'Region Sjælland',
            data: [76.5, 78.2, 84.3, 86.0, 92.1, 96.2, 98.1, 100.2, 114.8, 117.3],
            borderWidth: 5,
            borderColor: '#add8ce',
            backgroundColor: '#add8ce'
        }],


    },
    options: {
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        scaleShowValues: true,
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                }
            }],
            y: {
                grace: 10,
                display: true,
                grid: {
                    display: true
                },


            },
            x: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    size: 40
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Prisindeks for enfamiliehuse siden 2013'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

window.onscroll = function() {scrollBar()};

function scrollBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector('#myBar').style.width = scrolled + '%';
}