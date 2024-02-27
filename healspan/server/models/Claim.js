const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    dateOfService: {
        type: Date,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'denied'],
        default: 'pending'
    },
    billPhoto: {
        type: String,
        required: true
    },
    medicalReportPhoto: {
        type: String, 
    }
}, { timestamps: true });

module.exports = mongoose.model('Claim', claimSchema);
