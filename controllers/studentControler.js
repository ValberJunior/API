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
            imagem: req.body.imagem || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
 
            });

            try{
                const savedStudent = await newStudent.save();
                res.status(200).send("Aluno criado");
            }catch(error){
                res.status(400).send(error.message);
            }


    },
    update:(req, res)=>{
        StudentModel.findByIdAndUpdate(req.body.id,
            {nome: req.body.nome}, (err,data)=>{
                if(!err){
                    res.send(data);
                    console.log("Data updated!");
                }else{
                    res.status(404).send("Invalid Data");
                }
            })
    },

    delete:(req, res)=>{
        StudentModel.findByIdAndDelete((req.body.id),
        (err,data)=>{
            if(!err){
                res.send(data);
                console.log("Data Deleted!")
            }else{
               res.status(404).send("Invalid Data");
            }
        })
    }
}




module.exports = studentController;