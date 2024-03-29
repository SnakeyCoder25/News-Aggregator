let chart = null;  // This will hold our chart instance

function getStockData() {
    const ticker = document.getElementById('stockTicker').value.toUpperCase();
    if (!ticker) {
        alert('Please enter a valid ticker');
        return;
    }

    const apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs';
    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2022-01-03/2022-12-31?apiKey=${apiKey}`;

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
                    fill: false
                }, {
                    label: 'High',
                    data: highs,
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false
                }, {
                    label: 'Low',
                    data: lows,
                    borderColor: 'rgb(54, 162, 235)',
                    fill: false
                }, {
                    label: 'Close',
                    data: closes,
                    borderColor: 'rgb(255, 205, 86)',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: `Stock data for ${ticker}`
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Price'
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
