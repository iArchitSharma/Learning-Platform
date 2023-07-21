const Joi = require('joi');
const mongoose = require('mongoose');

const {categorySchema} = require('./catModels')

const courseSchema = new mongoose.Schema({
    title: {type: String, required: true, trim:true, minlength:5, maxlength:255},
    category: {type: categorySchema, required: true},
    creator: {type: String, required:true},
    rating:{type: Number, required:true}
});

const Course = mongoose.model('Course', courseSchema);

function validateData(course){
    const schema = Joi.object({
        title: Joi.string().required().min(5).max(50),
        categoryId: Joi.string().required(),
        creator: Joi.string().min(5).required(),
        rating: Joi.number().min(0).required()

    })
    return schema.validate(course);
}

exports.Course = Course;
exports.validateData = validateData;