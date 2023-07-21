const express = require('express');
const categories = require('./Routes/categories.js');
const students = require('./Routes/students.js');
const courses = require('./Routes/courses.js')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/learningPlatform')
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.error('Unable to Connect MongoDB',err));

app.use(express.json());

app.use('/api/categories',categories)
app.use('/api/students',students)
app.use('/api/courses',courses)


app.listen(3000, ()=>{
    console.log('Server running on 3000')
})
