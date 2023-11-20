import { TodoObject, Action } from "./actions/TodoListAction";

export interface Store{
    state: any;
    callbacks:any[];
    register(callBack: () => void): void;
    unregister(callBack: () => void): void;
    getState(): any;
    hendleAction(action: Action): void;
}


export class TodoLIstStore implements Store{
    state: any[] = [];
    callbacks: any[] = [];

    public register(callBack: () => void): void {
        this.callbacks.push(callBack);
    }

    public unregister(callBack: () => void): void {
        var index:number = this.callbacks.indexOf(callBack);
        if(index > -1){
            this.callbacks.splice(index, 1);
        }
    }

    public getState() {
        return this.state;
    }

    public hendleAction(action: Action): void {
        switch (action.action) {
            case "ADD_TODO":
                const todoObject = {} as TodoObject;
                todoObject.id = action.data.id;
                todoObject.todoText = action.data.todoText;
                const newArray = [...this.state, todoObject];
                this.state = newArray;

                this.callbacks.forEach((callbac) => callbac());
                break;
            default:
                break;
        }
    }
}