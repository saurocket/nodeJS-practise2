const express = require('express')
const router = express.Router()

const {getBooks,addBook,deleteBook,getOneBook,updateBook} = require('../conrollers/books')


router.route('/').get(getBooks)
router.route('/:ID').get(getOneBook)
router.route('/').post(addBook)
router.route('/:ID').put(updateBook)
router.route('/:ID').delete(deleteBook)





module.exports = router
