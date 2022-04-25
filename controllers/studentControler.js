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
            imagem: req.body.imagem || "https://us.123rf.com/450wm/kritchanut/kritchanut1407/kritchanut140700335/29898193-male-avatar-profile-picture-vector-icon.jpg?ver=6",
 
            });

            try{
                const savedStudent = await newStudent.save();
                res.redirect("/done");
            }catch(error){
                res.status(400).send(error.message);
            }


    },
    update:(req, res)=>{
        StudentModel.findByIdAndUpdate(req.body.id,
            {nome: req.body.nome}, (err,data)=>{
                if(!err){
                    res.redirect("/api/alunos")  //testar
                }else{
                    res.status(404).send("Invalid Data");
                }
            })
    },

    delete: (req, res)=>{
        const doc = StudentModel.findByIdAndDelete((req.params.id),
        (err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect("/");
            }
        })
    }

}




module.exports = studentController;