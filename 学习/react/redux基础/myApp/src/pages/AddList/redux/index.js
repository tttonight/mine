import { ADD_LIST, DELETE_LIST } from '../action';

function list(state = [], action) {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                action.text
            ];
        case DELETE_LIST: {
            return state.filter((item, key) => key !== action.index);
        }
        default:
            return state;
    }
}

export default list;