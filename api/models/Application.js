const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            unique: false,
        },
        position: {
            type: String,
            required: true,
            unique: false,
        },
        location: {
            type: String,
            required: false,
            unique: false,
        },
        contact: {
            type: String,
            required: false,
            unique: false,
        },
        interviewRequested: {
            type: Boolean,
            required: false,
            unique: false,
        },
        interviewDate: {
            type: String,
            required: false,
            unique: false,
        },
        notes: {
            type: String,
            required: false,
            unique: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Application', ApplicationSchema);