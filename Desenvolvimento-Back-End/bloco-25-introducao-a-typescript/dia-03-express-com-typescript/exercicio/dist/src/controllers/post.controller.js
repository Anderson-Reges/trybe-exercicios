"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../../statusCodes"));
const post_service_1 = __importDefault(require("../services/post.service"));
class PostController {
    constructor(postService = new post_service_1.default()) {
        this.postService = postService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postService.getAll();
            return res.status(statusCodes_1.default.OK).json(posts);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield this.postService.getById(Number(id));
            return res.status(statusCodes_1.default.OK).json(post);
        });
    }
}
exports.default = PostController;
