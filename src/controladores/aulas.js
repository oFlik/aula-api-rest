let { idAtualAula, aulas, instrutores } = require("../bancodedados/instrutores");

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: "É necessário informar o título!"})
    }

    if (!descricao) {
        return res.status(400).json({ mensagem: "É necessário informar a descricao"})
    }

    const aula = {
        id: idAtualAula++,
        idInstrutor: Number(idInstrutor),
        titulo,
        descricao,
    };

    aulas.push(aula);

    res.status(201).json(aula);
};

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
};

const detalharUmaAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: "A aula selecionada não existe! "})
    }

    return res.status(200).json(aula);
};

const listarAulasDeUmProfessor = (req, res) => {
    const { idInstrutor } = req.params;

    if (Number(idInstrutor) > instrutores.length) {
        return res.status(404).json({ mensagem: "O professor selecionado não existe! "})
    }

    const listaDeAulas = aulas.filter((aula) => {
        return aula.idInstrutor === Number(idInstrutor);
    });

    if (listaDeAulas == 0) {
        return res  
            .status(404)
            .json({ mensagem: "Não existe nenhuma aula para este professor" });
    }

    return res.status(200).json(listaDeAulas);
};  

module.exports = {
    cadastrarAula,
    listarAulas,
    detalharUmaAula,
    listarAulasDeUmProfessor,
};
