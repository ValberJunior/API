const User = require("../models/User");


const userController = {

    all: (req, res)=>{
        res.send("Listar todos os Alunos pelo Controller");
    },
    create: async (req, res)=>{
        const user = new User({
            nome: req.body.nome,
            cpf: req.body.cpf,
            datanasc: req.body.datanasc,
            email: req.body.email,
            telefone: req.body.telefone,
            logadouro: req.body.logadouro,
            numero: req.body.numero,
            cep: req.body.cep,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            turma: req.body.turma,
            funcao: req.body.funcao,
            registro: req.body.registro,
            comentarios: req.body.comentarios,
            imagem: req.body.imagem,
 
            });

            try{
                const savedUser = await user.save();
                res.send(savedUser);
            }catch(error){
                res.status(400).send(error.message);
            }


    },

}


function gerarRegistro(){
    (Math.random * 100).toString(36).substring(2,9);
}


module.exports = userController;