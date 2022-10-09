const mongoose      = require('mongoose');
const DataSchema    = mongoose.Schema({
    Name   : {type: String},
    Email  : {
        type    : String,
        index   : true,
        unique  : true,
        required: true
    },
    Roll   : {
        type    : Number,
        unique  : [true, 'please enter unique roll number'],
        required: true,
        min     : [100, 'min 100 & max 1200, but supplied value is = {VALUE}'],
        max     : [1200, 'min 100 & max 1200, but supplied value is = {VALUE}']
    },
    Class  : {type: String},
    Mobile : {
        type    : String,
        validate: {
            validator: function (value) {
                // return value.length === 11;
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
            },
            message  : "Invalid bangladeshi mobile number"
        }
    },
    Remarks: {
        type   : String,
        default: 'No Remarks'
    }
}, {versionKey: false});
const StudentsModel = mongoose.model('students', DataSchema);
module.exports      = StudentsModel;