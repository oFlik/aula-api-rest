const express = require("express");
const {
    hello,
    listarInstrutores,
    escolherUmInstrutor,
    adicionarUmInstrutor,
    atulizarInstrutor,
    atulizarStatusInstrutor,
} = require("./controladores/instrutores");

const router = express();

router.get("/", hello);
router.get("/instrutores", listarInstrutores);
router.get("/instrutores/:id", escolherUmInstrutor);
router.post("/instrutores", adicionarUmInstrutor);
router.put("/instrutores/:id", atulizarInstrutor);
router.patch("/instrutores/:id/status", atulizarStatusInstrutor);

module.exports = {
    router,
};
