import { Request, Response } from 'express';
var mongoStrCon: string = 'mongodb://localhost:27017/message';
var mongoose = require('mongoose');
var Message = require('../Entidades/message');

const InsertMessage = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            var newMessage = new Message({ id: req.body.id, conversationId: req.body.conversationId, timestamp: req.body.timestamp, from: req.body.from, to: req.body.to, text: req.body.text });
            newMessage.save(function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send("Mensagem adicionada!");
                }
            });
        }
    });
}

const GetMessage = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            Message.findOne({ id: req.params.id }, function (err, data) {
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

const ListMessages = (req: Request, res: Response) => {

    mongoose.connect(mongoStrCon, function (error) {
        if (error) {
            throw error;
        }
        else {
            Message.find({ 'message.conversationId': { $gte: req.params.conversationId } }, function (err, data) {
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

export const messageController = {
    GetMessage,
    ListMessages,        
    InsertMessage
}