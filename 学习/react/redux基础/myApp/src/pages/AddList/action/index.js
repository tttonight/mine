export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';


export function addList(text) {
    return {
        type: ADD_LIST,
        text
    }
}

export function deleteList(index) {
    return {
        type: DELETE_LIST,
        index
    }
}