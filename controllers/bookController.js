const { where } = require("sequelize");
const db = require("../database/connection"); // adjust path as per your project structure
const books = db.books;

exports.fetchBooks = async (req, res) => {
  try {
    //logic to fetch books from database
    const datas = await books.findAll();
    res.json({
      message: "Book fetched successfully!",
      datas: datas,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addBook = async (req, res) => {
  try {
    //logic to save books in database
    //console.log(req.body.bookName);
    const { bookKoName, bookPrice, bookAuthor, bookGenre } = req.body;
    console.log(bookKoName);
    console.log(bookPrice);
    console.log(bookAuthor);
    console.log(bookGenre);

    await books.create({
      bookKoName,
      bookPrice,
      bookAuthor,
      bookGenre,
    });
    res.json({ message: "Book saved successfully!" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBook = async (req, res) => {
  //logic to delete books from database
  try {
    const id = req.params.id; // const {id} = req.params (yesari pani destructure bata garna milcha)

    //id paaisakepachi, tyo id ko bok chai books table bata udaidine
    await books.destroy({
      where: {
        id,
      },
    }); // delete from books where id = id;

    res.json({ message: `Book deleted successfully!` });
  } catch (error) {
    console.log(error);
  }
};

exports.editBook = async function (req, res) {
  //kun id ko edit garne tesko id linu paryo
  try {
    const id = req.params.id;
    const { bookKoName, bookPrice, bookAuthor, bookGenre } = req.body;

    await books.update(
      { bookKoName, bookPrice, bookAuthor, bookGenre },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ message: "Edited successfully!" });
  } catch (error) {
    console.log(error);
  }
};

exports.singleFetchBook = async function (req, res) {
  //first capture what id is he sending
  try {
    const id = req.params.id;
    const datas = await books.findByPk(id); //always returns object
    // books.findAll({  it returns values in Array
    //     where: {
    //         id: id
    //     }
    // })
    res.json({
      message: "Single book is fetched successfully",
      datas: datas,
    });
  } catch (error) {
    console.log(error);
  }
};

// module.exports = {fetchBooks, addBook, deleteBook, editBook};  you can export methods like this too.
