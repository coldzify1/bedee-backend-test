export type TodoStatus = 'pending' | 'completed'
export interface Todo {
    id : number
    title : string
    status :TodoStatus
}

export interface TodoCreateInput{
    title : string
}

export interface TodoUpdateInput {
    status : TodoStatus
}
export interface TodoQuery {
    search_text : string,
    status : TodoStatus
}
