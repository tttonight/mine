import React, { Component } from 'react';
// 引入connect， 用于把数据和组件进行关联
import { connect } from 'react-redux';

// 引入action的相关组件
import { addList, deleteList } from './action';

class AddList extends Component {
    render() {
        // this.props的数据来源与，在index.js中使用Privider包裹，所有组件都能访问state
        const { onClick, onDelete, list } = this.props;
        let input = '';
        // 进行数据渲染
        return (
            <div>
                <input type="text" ref={ref => input = ref} />
                <button onClick={() => onClick(input.value)}>添加</button>

                <ul>
                    {list.map((item, key) => (
                        <li key={key}>
                            {item}
                            &nbsp;&nbsp;
                            <a
                                onClick={() => onDelete(key)}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: 12,
                                    color: 'blue'
                                }}
                            >删除</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

// mapStateToProps（对应数据）和mapDispatchToProps（对应一些动作）就像react给我们提供的语法糖，把一些复杂的操作帮我们封装好了
// 值
const mapStateToProps = (state) => ({
    list: state.list
})

// 事件
const mapDispatchToProps = (dispatch) => ({
    onClick: (text) => dispatch(addList(text)),// 在事件中传递参数
    onDelete: (index) => dispatch(deleteList(index))
})
// connect的用处在于把数据和组件（List）进行组合生成一个新的组件，并抛出
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddList);