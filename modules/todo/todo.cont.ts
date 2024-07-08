import { Request, Response } from "express";
import { TodoCreateInput, TodoQuery, TodoStatus, TodoUpdateInput } from './todo.type';
import TodoService from "./todo.service";

export default class TodoController{

    static createReq = async(req : Request,res : Response) => {
        let data = req.body as TodoCreateInput
        try{
            
            let result = TodoService.create(data)
            res.json(result)
        }
        catch(err){
            const error = err as Error;
            res.status(400).json({error : error.message})
        }
    }
    static updateReq = async(req : Request,res : Response) => {
        let data = req.body as TodoUpdateInput
        let id  = parseInt(req.params.id) 
        try{
            if(data.status && data.status !== 'completed' && data.status !== 'pending'){
                throw new Error('Invalid status')
            }
            TodoService.update(id,data)
            res.json({success : true})
        }
        catch(err){
            const error = err as Error;
            res.status(400).json({error : error.message})
        }
    }
    static deleteReq = async(req : Request,res : Response) => {
        let id  = parseInt(req.params.id) 
        try{
            TodoService.delete(id)
            res.json({success : true})
        }
        catch(err){
            const error = err as Error;
            res.status(400).json({error : error.message})
        }
    }
    static getAllReq = async(req : Request,res : Response) => {
        try{
            if(req.query.status && req.query.status !== 'completed' && req.query.status !== 'pending'){
                throw new Error('Invalid status')
            }
            let query : TodoQuery = {
                status : req.query.status as TodoStatus,
                search_text : req.query.search_text as string
            }
            let results = TodoService.getAll(query)

            res.json(results)
        }
        catch(err){
            const error = err as Error;
            res.status(400).json({error : error.message})
        }
    }
    static getOneReq = async(req : Request,res : Response) => {
        let id  = parseInt(req.params.id) 
        try{
            let item = TodoService.getOne(id)
            res.json(item)
        }
        catch(err){
            const error = err as Error;
            res.status(400).json({error : error.message})
        }
    }
}