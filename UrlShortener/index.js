const express = require('express'); 
const app = express();

const connection = require('./config/db');
const urlRoute = require('./routes/urlroute');

app.listen(3000, () => {
    console.log(`Server is running on port 3000 http://localhost:3000`);
});
app.use(express.json());
connection('mongodb://127.0.0.1:27017/urlshortenerDB').then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error ", error);
});

app.use('/url', urlRoute);

