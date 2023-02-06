"use strict";
// ./models/Book.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class BookModel {
    constructor() {
        this.connection = connection_1.default;
    }
    async getAll() {
        const [rows] = await this.connection.execute('SELECT * FROM books');
        return rows;
    }
    async create(book) {
        const { title, price, author, isbn } = book;
        const [{ insertId }] = await this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
        return { id: insertId, ...book };
    }
}
exports.default = BookModel;
