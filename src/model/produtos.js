import mongoose from "mongoose";

const Produtos = mongoose.model("produtos", {
    url: String,
    nome: String,
    ingredientes: String,
    preço: String,
});

export default Produtos;