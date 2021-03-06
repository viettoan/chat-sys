var mongoose = require('mongoose');
var schema = mongoose.Schema;

var categorySchema = new schemaa({
    type_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: Number,
        default: true
    },
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('category', categorySchema);