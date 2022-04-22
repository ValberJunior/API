const mongoose = require("mongoose");
const StudentModel = require("../models/Student");


const studentController = {

    all: (req, res)=>{
        
        StudentModel.find((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.set('Access-Control-Allow-Origin', process.env.APP_URL || "http://127.0.0.1:5500");
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
                res.set('Access-Control-Allow-Origin', process.env.APP_URL || "http://127.0.0.1:5500");
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
            logadouro: req.body.logadouro,
            numero: req.body.numero,
            cep: req.body.cep,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            turma: req.body.turma,
            funcao: req.body.funcao,
            registro: gerarRegistro(),
            comentarios: req.body.comentarios,
            imagem: req.body.imagem,
 
            });

            try{
                const savedStudent = await newStudent.save();
                res.send(savedStudent);
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


function gerarRegistro(){
    (Math.random * 100).toString(36).substring(2,9);
}


module.exports = studentController;