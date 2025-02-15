import { model, Schema } from 'mongoose';

const bookSchema = new Schema({
    book_id: {
        unique: true,
        required: true,
        type: Number
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    pages: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Book', bookSchema);
