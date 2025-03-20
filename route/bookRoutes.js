

const express = require('express');
const Book = require('../models/book');
const auth = require('../middleware/auth');

const book = await Book.find().populate('author');

const router = express.Router();

// Ajouter un livre
router.post('/', auth, async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBook = new Book({ title, author, userId: req.user.userId });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Récupérer les livres d’un utilisateur
router.get('/', auth, async (req, res) => {
    try {
        const books = await Book.find({ userId: req.user.userId });
        res.json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Supprimer un livre
router.delete('/:id', auth, async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: "Livre supprimé" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;