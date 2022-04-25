const mongoose = require("mongoose");
const StudentModel = require("../models/Student");



const studentController = {

    all: (req, res)=>{
        
        StudentModel.find((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.send(data);
            }
        })

    }
    ,
    getForParams: (req, res)=>{
        StudentModel.findById((req.params.id),
        (err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.send(data);
            }
        })
    }
    ,
    create: async (req, res)=>{
        const newStudent = new StudentModel({
            nome: req.body.nome,
            cpf: req.body.cpf,
            datanasc: req.body.datanasc,
            email: req.body.email,
            telefone: req.body.telefone,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            cep: req.body.cep,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            turma: req.body.turma,
            funcao: req.body.funcao,
            matricula: req.body.matricula,
            comentarios: req.body.comentarios,
            imagem: req.body.imagem ,
 
            });

            try{
                const savedStudent = await newStudent.save();
                res.redirect("/done");
            }catch(error){
                res.status(400).send(error.message);
            }


    },
    update:(req, res)=>{

        const ID = req.body.id;

        const options = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            datanasc: req.body.datanasc,
            email: req.body.email,
            telefone: req.body.telefone,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            cep: req.body.cep,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            turma: req.body.turma,
            funcao: req.body.funcao,
            matricula: req.body.matricula,
            comentarios: req.body.comentarios,
            imagem: req.body.imagem ,
 
            };

            StudentModel.findByIdAndUpdate(ID,
                options, (err,data)=>{
                    if(!err){
                        res.send(data);
                    }else{
                        res.status(404).send("Invalid Data");
                    }
            })
    },

    delete: async (req, res)=>{
        const ID = req.params.id;

        if(!ID){
            ID = req.body.id;
        }
    
        try{
         await StudentModel.findByIdAndDelete(ID);
         res.status(200).send("Aluno Deletado!");
        }
        catch(error){
            res.status(404).send(error); //Tratando o erro
        }
        
    }
}




module.exports = studentController;