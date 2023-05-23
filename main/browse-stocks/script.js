let chart = null;  // This will hold our chart instance






function getStockData() {
    const ticker = document.getElementById('stockTicker').value.toUpperCase();
    localStorage.setItem('stockTicker', ticker);

    if (!ticker) {
        alert('Please enter a valid ticker');
        return;
    }

    const apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs';

    // Get the selected time range option
    const timeRangeSelect = document.getElementById('timeRangeSelect');
    const timeRange = timeRangeSelect.value;

    // Calculate the start and end dates based on the selected time range
    const endDate = new Date();
    let startDate;
    switch (timeRange) {
        case '1d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 1);
            break;
        case '3d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 3);
            break;
        case '7d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);
            break;
        case '24d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 24);
            break;
        case '12h':
            startDate = new Date();
            startDate.setHours(endDate.getHours() - 12);
            break;
        case '14d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 14);
            break;
        case '28d':
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 28);
            break;
        case '3month':
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 3);
            break;
        case '6month':
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 6);
            break;
        case '9month':
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 9);
            break;
        case '12month':
            startDate = new Date();
            startDate.setFullYear(endDate.getFullYear() - 1);
            break;
        case '2year':
            startDate = new Date();
            startDate.setFullYear(endDate.getFullYear() - 2);
            break;
        default:
            alert('Please select a valid time range');
            return;
    }

    const startDateString = startDate.toISOString().split('T')[0];
    const endDateString = endDate.toISOString().split('T')[0];

    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${startDateString}/${endDateString}?apiKey=${apiKey}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const dates = data.results.map(result => new Date(result.t).toLocaleDateString());
        const opens = data.results.map(result => result.o);
        const highs = data.results.map(result => result.h);
        const lows = data.results.map(result => result.l);
        const closes = data.results.map(result => result.c);

        if (chart) {
            chart.destroy();  // If a chart already exists, destroy it before creating a new one
        }

        const ctx = document.getElementById('stockChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Open',
                    data: opens,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }, {
                    label: 'High',
                    data: highs,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true
                }, {
                    label: 'Low',
                    data: lows,
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true
                }, {
                    label: 'Close',
                    data: closes,
                    borderColor: 'rgb(255, 205, 86)',
                    backgroundColor: 'rgba(255, 205, 86, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: `Stock data for ${ticker}`,
                    fontSize: 20,
                    fontColor: '#333'
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: '#333',
                        fontSize: 14
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date',
                            fontColor: '#333',
                            fontSize: 16
                        },
                        ticks: {
                            fontColor: '#333',
                            fontSize: 12,
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Price',
                            fontColor: '#333',
                            fontSize: 16
                        },
                        ticks: {
                            fontColor: '#333',
                            fontSize: 12
                        }
                    }
                },
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                            speed: 0.1
                        }
                    }
                }
            }
        });
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
