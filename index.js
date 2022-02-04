const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

const connectionString = 'mongodb+srv://kunga_lhosel:2641678@cluster0.ikvyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//TODO - Replace you Connection String here
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
