const { instrutores } = require("../bancodedados/instrutores");
let { idAtual } = require("../bancodedados/instrutores");

const hello = (req, res) => {
    res.status(200).send("Hello");
};

const listarInstrutores = (req, res) => {
    res.status(200).json(instrutores);
};

const escolherUmInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).send("Instrutor não encontrado!");
    }

    return res.status(200).json(instrutor);
};

const adicionarUmInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ Mensagem: "O nome é obrigatório!" });
    }

    if (!email) {
        return res.status(400).json({ Mensagem: "O email é obrigatório!" });
    }

    const instrutor = {
        id: idAtual++,
        nome,
        email,
        status: status ?? true,
    };

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
};

const atulizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ Mensagem: "O nome é obrigatório!" });
    }

    if (!email) {
        return res.status(400).json({ Mensagem: "O email é obrigatório!" });
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).send("Instrutor não encontrado!");
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
};

const atulizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).send("Instrutor não encontrado!");
    }

    instrutor.status = status;

    return res.status(204).send();
}

module.exports = {
    hello,
    listarInstrutores,
    escolherUmInstrutor,
    adicionarUmInstrutor,
    atulizarInstrutor,
    atulizarStatusInstrutor
};
