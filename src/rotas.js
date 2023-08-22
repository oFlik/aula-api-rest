const express = require("express");
const {
    hello,
    listarInstrutores,
    escolherUmInstrutor,
    adicionarUmInstrutor,
    atulizarInstrutor,
    atulizarStatusInstrutor,
    excluirInstrutor,
} = require("./controladores/instrutores");

const router = express();

router.get("/", hello);
router.get("/instrutores", listarInstrutores);
router.get("/instrutores/:id", escolherUmInstrutor);
router.post("/instrutores", adicionarUmInstrutor);
router.put("/instrutores/:id", atulizarInstrutor);
router.patch("/instrutores/:id/status", atulizarStatusInstrutor);
router.delete("/instrutores/:id", excluirInstrutor);

module.exports = {
    router,
};
