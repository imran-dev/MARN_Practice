const mongoose     = require('mongoose');
const DataSchema   = mongoose.Schema({
    FirstName   : {
        type    : String,
        required: true
    },
    LastName    : {
        type: String
    },
    EmailAddress: {
        type: String
    },
    MobileNumber: {
        type    : String,
        validate: {
            validator: function (value) {
                // return value.length === 11;
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
            },
            message  : "Invalid bangladeshi mobile number"
        }
    },
    City        : {
        type: String
    },
    UserName    : {
        type  : String,
        unique: [true, '{VALUE} user name already exist.']
    },
    Password    : {
        type: String
    }
}, {versionKey: false});
const ProfileModel = mongoose.model('Profile', DataSchema);
module.exports     = ProfileModel;