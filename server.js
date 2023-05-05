const express = require('express');
const app = express();
const data = require('./data.json');

const PORT = process.env.PORT || 5000;

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.send('Good luck! :)');
});

app.get('/heartrate', (req, res) => {
    const { fromDate } = req.query;
    let filteredData = data;

    if (fromDate) {
        filteredData = data.filter((item) => item.dateTime >= fromDate);
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(filteredData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
