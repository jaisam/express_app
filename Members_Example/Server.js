const express = require('express');
const members = require('./Model/Members');

const app = express();

const PORT = 5000;

app.listen(PORT , () => 
console.log(`Server up and running on ${PORT}`)
//console.log(members)
);


// Router for /api/members route
app.use('/api/members' , require('./Routes/API Routes/memberRouteAPIs'));


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));