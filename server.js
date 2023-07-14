// Import Express package to make the application server
const express = require('express')
const request = require('request');

// Instantiationg the Express module
const app = express()

// In  which port the app server will run
const port = process.env.VCAP_APP_PORT || 5000

// Creating the API with Route (hello)
// 'hello' is like Entityset from OData
// req - Request (Input) http://.../hello?user=Cacheta
// res - Response (Output)
app.get('/hello', (req, res) => {
    console.log("how are you?")
    console.log(req.query.user)
    res.send("hellooooo" + ' ' + req.query.user)
})

app.get('/weather', (req, res) => {
    
    var options = {
        'method': 'GET',
        'url': 'https://api.openweathermap.org/data/2.5/weather?id=3458330&units=metric&lang=pt_br&appid=23c2cc4e721d38530d5c0ce18753618a',
        'headers': {
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
})

// Listener
app.listen(port, () => {
    console.log('Server is running on port 5000')
})


console.log("Welcome Cacheta");