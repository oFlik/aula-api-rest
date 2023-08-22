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
const {
    listarAulas,
    detalharUmaAula,
    cadastrarAula,
    listarAulasDeUmProfessor,
} = require("./controladores/aulas");

const router = express();

router.get("/", hello);
router.get("/instrutores", listarInstrutores);
router.get("/instrutores/:id", escolherUmInstrutor);
router.post("/instrutores", adicionarUmInstrutor);
router.put("/instrutores/:id", atulizarInstrutor);
router.patch("/instrutores/:id/status", atulizarStatusInstrutor);
router.delete("/instrutores/:id", excluirInstrutor);

router.post("/instrutores/:idInstrutor/aulas", cadastrarAula);
router.get("/aulas", listarAulas);
router.get("/aulas/:id", detalharUmaAula);
router.get("/instrutores/:idInstrutor/aulas", listarAulasDeUmProfessor);

module.exports = {
    router,
};
