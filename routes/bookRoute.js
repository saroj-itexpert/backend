const { fetchBooks, addBook, editBook, deleteBook, singleFetchBook } = require("../controllers/bookController");

const router = require("express").Router()

//eutai route ma multiple methods get , post , patch, delete chain garna milyo 
router.route("/books").get(fetchBooks).post(addBook);
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook);

module.exports = router;
