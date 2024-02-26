const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    claim: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim',
        required: true
    },
    documentName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Document', documentSchema);
