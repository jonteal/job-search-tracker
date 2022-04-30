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
        dateApplied: {
            type: String,
            required: false,
            unique: false,
        },
        workLocation: {
            type: String,
            required: false,
            unique: false,
        },
        followUpDate: {
            type: String,
            required: false,
            unique: false,
        },
        contactName: {
            type: String,
            required: false,
            unique: false,
        },
        interviewRequested: {
            type: String,
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