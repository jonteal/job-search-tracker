const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema(
    {
        company: {

        },
        position: {

        },
        location: {

        },
        contact: {

        },
        interviewRequested: {

        },
        interviewDate: {

        },
        notes: {

        }

    },
    { timestamps: true }
);

module.exports = mongoose.model('Application', ApplicationSchema);