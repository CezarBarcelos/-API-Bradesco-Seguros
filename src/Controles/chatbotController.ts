import { Request, Response } from 'express';
var mongoStrCon: string = 'mongodb://localhost:27017/chatbot';
var mongoose = require('mongoose');
var Chatbot =  require('../Entidades/chatbot');

const InsertChatbot = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            var newChatbot = new Chatbot({ id: req.body.id, name: req.body.name });
            newChatbot.save(function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send("Chatbot adicionado!");
                }
            });
        }
    });
}

const GetChatbot = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {            
            Chatbot.findOne({ _id: req.params.id }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(data);
                }
            });
        }
    });
}

const ListChatbots = (_req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
             Chatbot.find({},function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(data);
                }
            });
        }
    });
}

const DeleteChatbot = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            Chatbot.remove({ _id: req.params.id }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(data);
                }
            });
        }
    });
}

const UpdateChatbot = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            Chatbot.findByIdAndUpdate(req.params.id, { id: req.body.id, name: req.body.name }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(data);
                }
            });
        }
    });
}

mongoose.connection.close();

export const chatbotController = {
    InsertChatbot,
    GetChatbot,
    ListChatbots,
    DeleteChatbot,
    UpdateChatbot
}