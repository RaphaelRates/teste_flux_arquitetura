import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoLIstStore } from "../app/store";
import { Action, TodoaddAction, TodoObject } from "../app/actions/TodoListAction";
import { TodoItemDispatcher } from "../app/dispacher/TodoItemDispacher";
import { TextInput, TouchableOpacity, View, Text, FlatList } from "react-native";


const dispacher = new TodoItemDispatcher() ;
const store = new TodoLIstStore();

dispacher.register((action:Action)=>{
    store.hendleAction(action);
});



export default function TodoList(){

    const [todoText, setTodoText] = useState<string>('');
    const [todos, setTodos] = useState<TodoObject[]>([]);
    const [indexArray, setIndexArray] = useState<number>(0)

    useEffect(() => {
        const handleStoreConfig = () => {
            setTodos(store.getState());
        };

        store.register(handleStoreConfig);

        return () => {
            store.unregister(handleStoreConfig);
        };

    },[])


    function addTOdo(){

        if(todoText !== ''){
            setIndexArray(set => set + 1)

            const action = new TodoaddAction();
            action.data.todoText = todoText;
            action.data.id = indexArray;

            dispacher.dispatch(action)

            // fetch('https://jsonplaceholder.typicode.com/todos/1')
            //     .then(response => response.json())
            //     .then(json => console.log(json))
            
            // isso foi apenas para um teste isolado com uma falsa api

        } 

    }

    return (
        <>
            <View>
                <View>
                <TextInput style={{margin: 100, borderColor: 'blue', borderWidth: 1}} value={todoText}  onChangeText={setTodoText}/>
                <View>
                </View>
                <View>
                </View>
                <TouchableOpacity onPress={addTOdo} >
                    <Text>add new</Text>
                </TouchableOpacity> 
                </View>
            </View>
            <View >
            <FlatList
                data={todos}
                renderItem={({item}) => <TodoItem itemName={item.todoText}/>}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </>
        
    )

}