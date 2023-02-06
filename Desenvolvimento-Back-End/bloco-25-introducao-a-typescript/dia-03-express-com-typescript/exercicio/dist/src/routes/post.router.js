"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const router = (0, express_1.Router)();
const postController = new post_controller_1.default();
router
    .get('/', postController.getAll)
    .get('/:id', postController.getById);
exports.default = router;
