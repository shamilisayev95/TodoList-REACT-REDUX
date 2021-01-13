import constants from '../../constants/index';

export const onAddTodo = todo => ({
    type: constants.ADD_TODO,
    payload: todo
})

export const onDeleteTodo = todoid => ({
    type: constants.DELETE_TODO,
    payload: todoid
})
