import BookDAO from "../dao/books.dao.js"; 

const booksController = {};

// Obtener todos los libros
booksController.getAll = (req, res) => {
    BookDAO.getAll()
        .then((books) => {
            // Renderizar la vista 'index.ejs' con la lista de libros
            res.render('../src/views/index.ejs', { books });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error
                }
            });
        });
};

// Obtener un solo libro por ID
booksController.getOne = (req, res) => {
    BookDAO.getOne(req.params.book_id)
        .then((book) => {
            if (book != null) {
                // Renderizar la vista 'edit.ejs' con los detalles del libro
                res.render('../src/views/edit.ejs', { book });
            } else {
                res.json({ data: { message: "Book not found" } });
            }
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error
                }
            });
        });
};

// Insertar un nuevo libro
booksController.insert = (req, res) => {
    BookDAO.insert(req.body)
        .then((response) => {
            // Redirigir a la lista de libros
            res.redirect('/api/books/getAll');
        })
        .catch((error) => {
            res.json({
                data: { message: error }
            });
        });
};

export default booksController;
