const {Schema,model} = require('mongoose')
const BookSchema = Schema({
    tittle: {
        unique: true,
        type: String,
        required: [true, 'Please add Book tittle']
    },
    author:{
        type: String,
        required: [true, 'Please add author Name']
    },
    price:{
        type: Number,
        min: 0.01,
        required:[true, 'Price is required field']
    },
    image:{
        type: String
    }
},{ versionKey: false, timestamps: true}
)


const Book = model('book',BookSchema)
module.exports = Book
