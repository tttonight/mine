import { VisibilityFilters } from '../action';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../action';

import { combineReducers } from 'redux';

// 初始值
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

/**
 * 1、简单的redux函数：接收旧的state和action，返回新的state
 * (1) state要有一个初始值，用es6方法
 * (2) 不要修改state，所以这里使用了Object.assign创建一个副本，注意：第一个参数必须不能是state，因为Object.assign会改变第一个参数的值
 *      也可以用es6方法 {...state,...newState}
 * (3) 在 default 情况下返回旧的 state
 */
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         default:
//             return state
//     }
// }

/**
 * 2、处理多个action
 *  可以将todos也加进去
 */
// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         case ADD_TODO: //作用：在旧的加上新的todo
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         default: return state;
//     }
// }

/**
 * 3、 拆分reducer
 *      这里的todos和visibilityFilter的更新看起来是相互独立的，所以我们可以先把todos更新的业务逻辑拆分到一个单独的函数中,
 *      这样的话todoApp就可以入下todoApp3那种写法写：注意 todos 依旧接收 state，但它变成了一个数组
 */
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: {
            const result = [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
            return result;
        }

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default: return state;
    }
}

// function todoApp3(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         default:
//             return state
//     }
// }


/**
 * 4、同理，也可以把visibilityFilter拆分出来
 *     这样的话todoApp就可以入下todoApp4那种写法写： 注意每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
 */
const { SHOW_ALL } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//  4
// function todoApp4(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

/**
 *  5、最后，Redux 提供了 combineReducers() 工具类来做上面 todoApp 做的事情，就可以重构todoApp啦
 */
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp