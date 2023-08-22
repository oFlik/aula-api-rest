const bancoDeDados = {
    idAtualInstrutor: 3,
    idAtualAula: 3,
    instrutores: [
        {
            id: 1,
            nome: "Thiago",
            email: "thiago@email.com",
            status: true,
        },
        {
            id: 2,
            nome: "Eduarda",
            email: "eduarda@email.com",
            status: true,
        },
    ],
    aulas: [
        {
            id: 1,
            idInstrutor: 1,
            titulo: "Lógica de Programação",
            descricao: "Fundamentos da lógica para iniciantes",
        },
        {
            id: 2,
            idInstrutor: 2,
            titulo: "API REST",
            descricao: "Como criar umaa API com o padrão REST",
        },
    ],
};

module.exports = bancoDeDados;
