import React from "react";
import {
    View,
    Text,
 } from "react-native";

interface TodoItemProps{
    itemName: string;
}

export default function TodoItem(props: TodoItemProps){
    return (
        <>
            <View >
                <Text>{props.itemName}</Text>
            </View>
        </>
    )
}