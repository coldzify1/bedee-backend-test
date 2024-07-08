import { Todo, TodoCreateInput, TodoQuery, TodoUpdateInput } from "./todo.type"


var todo_list : Todo[] = [
    {
        id : 1,
        title : 'Cleaning kitchen',
        status : 'pending'
    },
    {
        id : 2,
        title : 'Meeting the doctor',
        status : 'pending'
    },
    {
        id : 3,
        title : 'Watering flower',
        status : 'pending'
    },
]
export default class TodoService{

    static create = (data : TodoCreateInput) => {
        const max_id = todo_list[todo_list.length-1].id
        const next_id = max_id + 1
        const new_todo : Todo = {
            id : next_id,
            title : data.title,
            status  : 'pending'
        }
        todo_list.push(new_todo)
        return new_todo
    }
    static update = (id : number,data : TodoUpdateInput ) => {
        const index = getTodoIndex(id)
        todo_list[index] = {...todo_list[index],...data}
    }
    static delete = (id : number) => {
        const index = getTodoIndex(id)
        todo_list.splice(index,1)
    }
    static getAll = (query : TodoQuery) => {
        let {search_text,status} = query
        let filterd_items = todo_list
        if(search_text){
            filterd_items = filterd_items.filter(item => item.title.toLocaleLowerCase().includes(search_text.toLocaleLowerCase()))
        }
        if(status){
            filterd_items = filterd_items.filter(item => item.status === status)
        }

        return filterd_items

    }
    static getOne = (id : number) => {
        const index = getTodoIndex(id)
        return todo_list[index]
    }
}

function getTodoIndex(id : number) : number{
    const index = todo_list.findIndex(item => item.id === id)
    if(index === -1){
        throw new Error('Invalid todo id')
    }
    return index
}