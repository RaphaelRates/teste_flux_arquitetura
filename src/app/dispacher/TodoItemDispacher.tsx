import { Action } from "../actions/TodoListAction";

export class TodoItemDispatcher{
    callBacks:any[] = [];

    public register (callBack: (action:Action)=> void): void{

        this.callBacks.push(callBack);
    }

    public dispatch(action: Action):void{
        this.callBacks.forEach((call) => call(action))
    }
}