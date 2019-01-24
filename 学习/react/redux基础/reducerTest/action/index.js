/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// const boundAddToDo = text => dispatch(addTodo(text));

/*
 * action 创建函数
 */

// function :增加todo
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

// function: 修改todo的状态
export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

// function: 过滤其状态
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}