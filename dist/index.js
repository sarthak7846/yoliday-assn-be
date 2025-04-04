"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Server is healthy");
});
app.get("/projects", (req, res) => {
    res.send("projectssss");
});
app.get("/cart", (req, res) => {
    res.send("saved projects");
});
app.post("/cart", (req, res) => {
    res.send("add to cart");
});
app.listen(3000, () => {
    console.log("Server on http://localhost:3000");
});
