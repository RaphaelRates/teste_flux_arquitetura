export interface Action{
    action: String;
    data: any;
}

export interface TodoObject{
    todoText: string;
    id: number
}

export class TodoaddAction implements Action {
    public action: String = "ADD_TODO";
    public data = {} as TodoObject;
}