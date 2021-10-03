
const Book = require('../models/Book')

exports.getBooks = () => {
    console.log('get all books')
}
exports.getOneBook = () => {
    console.log('get one book')
}
exports.addBook = async (req,res,next) => {
    try {
        const book = await Book.create(req.body)

        res.status(201).json({
            code: 201,
            status: 'success',
            data: book
        })

    }catch (e) {

    }


    // console.log('add book')
}
exports.updateBook = () => {
    console.log('update book')
}
exports.deleteBook = () => {
    console.log('delete book')
}
