//book name ko table and 4 columns: bookName, bookPrice, bookAuthor, bookGenre
//Arrow function
const bookModel= (sequelize, DataTypes)=> {
    //define bhanne bata create garne table
        //rule in database, J naam lekhnu huncha tesko plural huncha in supabase for eg. if you write product it becomes products
    const Book = sequelize.define("book",{
        bookName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice:{
            type: DataTypes.INTEGER
        },
        bookAuthor:{
            type: DataTypes.STRING,
            // defaultValue : "Saroj  Maharjan"
        },
        
    })
    return Book;  //function call garda resonse ma Book return garam

}

module.exports = bookModel;