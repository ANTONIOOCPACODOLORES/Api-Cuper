import Book from "../models/Books.js";

const BookDAO = {};

// Obtener todos los libros
BookDAO.getAll = async () => {
    return await Book.find();
};

// Obtener un libro por ID
BookDAO.getOne = async (book_id) => {
    return await Book.findOne({ book_id: book_id });
};

// Insertar un nuevo libro
BookDAO.insert = async (bookData) => {
    const newBook = new Book(bookData);
    return await newBook.save();
};

export default BookDAO;
