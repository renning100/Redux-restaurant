import { INCREMENT,DECREMENT } from "./types";

export function increment(index,id){
    return {
        type:INCREMENT,
        payload:{
            index,
            id
        }
    }
}
export function decrement(index,id){
    return {
        type:DECREMENT,
        payload:{
            index,
            id
        }
    }
}