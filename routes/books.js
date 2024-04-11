const express = require("express");

// const { append } = require("express/lib/response");
const { books } = require("../data/books.json");

const { UserModel, BookModel } = require("../models");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById } = require("../controllers/book-controller");
const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all the books
 * Access: Public
 * Parmanters: none
 */
router.get("/", getAllBooks);

router.get("/", getSingleBookById);

router.get("/issued/books", getAllIssuedBooks);

router.post("/", addNewBook);

router.put("/:id", updateBookById);

module.exports = router;